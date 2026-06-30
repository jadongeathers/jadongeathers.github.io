import React, { useCallback, useEffect, useRef, useState } from 'react';
import Window from './Window';
import Taskbar from './Taskbar';
import MenuBar from './MenuBar';
import { IconArt, ICONS } from './PixelIcon';
import {
  AboutContent,
  ResearchContent,
  ChitterChatterContent,
  HighlightsContent,
  CVContent,
  ContactContent,
  VisitorsContent,
  DesktopPhotos,
} from './WindowContents';

/*
 * Catalog of every window the desktop knows how to open.
 */
const WINDOW_CATALOG = {
  about: {
    title: 'About Me',
    icon: 'images/icons/about.png',
    defaultSize: { w: 780, h: 660 },
    render: (ctx) => <AboutContent {...ctx} />,
  },
  research: {
    title: 'Research',
    icon: 'images/icons/research.png',
    defaultSize: { w: 880, h: 720 },
    render: (ctx) => <ResearchContent {...ctx} />,
  },
  chitterchatter: {
    title: 'ChitterChatter',
    icon: 'images/icons/chitterchatter.png',
    defaultSize: { w: 820, h: 720 },
    bodyClassName: 'flush',
    render: () => <ChitterChatterContent />,
  },
  highlights: {
    title: 'News',
    icon: 'images/icons/news.png',
    defaultSize: { w: 820, h: 680 },
    render: () => <HighlightsContent />,
  },
  cv: {
    title: 'Curriculum Vitae',
    icon: 'images/icons/cv.png',
    defaultSize: { w: 960, h: 720 },
    render: () => <CVContent />,
  },
  contact: {
    title: 'Contact',
    icon: 'images/icons/contact.png',
    defaultSize: { w: 620, h: 540 },
    render: (ctx) => <ContactContent {...ctx} />,
  },
  visitors: {
    title: 'Visitors',
    icon: 'images/icons/visitors.png',
    defaultSize: { w: 620, h: 560 },
    render: () => <VisitorsContent />,
  },
};

const CLOSE_DURATION = 160;

const DESKTOP_ICONS = [
  { id: 'about', label: 'About Me', icon: 'images/icons/about.png' },
  { id: 'research', label: 'Research', icon: 'images/icons/research.png' },
  { id: 'chitterchatter', label: 'ChitterChatter', icon: 'images/icons/chitterchatter.png' },
  { id: 'highlights', label: 'News', icon: 'images/icons/news.png' },
  { id: 'cv', label: 'CV', icon: 'images/icons/cv.png' },
  { id: 'contact', label: 'Contact', icon: 'images/icons/contact.png' },
  { id: 'visitors', label: 'Visitors', icon: 'images/icons/visitors.png' },
];

const TASKBAR_HEIGHT = 36;
const MENU_BAR_HEIGHT = 30;
const ICON_POS_KEY = 'icon-positions-v1';
const DRAG_THRESHOLD = 5; // px before a press becomes a drag rather than a click

const VISITOR_SCRIPT_ID = 'mapmyvisitors';
const VISITOR_SCRIPT_SRC =
  '//mapmyvisitors.com/map.js?d=TGXWDgSi-FdI2zc3Qlu8KZJXMqL3IPd0yoePjMqs9sY&cl=ffffff&w=a';
export const VISITOR_HOST_ID = 'visitor-map-host';

function defaultIconPositions() {
  // Left column, starting just below the menu bar
  const startX = 24;
  const startY = MENU_BAR_HEIGHT + 24;
  const stepY = 96;
  const out = {};
  DESKTOP_ICONS.forEach((icon, i) => {
    out[icon.id] = { x: startX, y: startY + i * stepY };
  });
  return out;
}

function loadIconPositions() {
  try {
    const raw = localStorage.getItem(ICON_POS_KEY);
    if (!raw) return defaultIconPositions();
    const parsed = JSON.parse(raw);
    // Merge so new icons get defaults; previously-saved positions stick
    const defaults = defaultIconPositions();
    return { ...defaults, ...parsed };
  } catch {
    return defaultIconPositions();
  }
}

function getWindowDefaults(id, index) {
  const spec = WINDOW_CATALOG[id];
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  const w = Math.min(spec.defaultSize.w, vw - 24);
  const h = Math.min(spec.defaultSize.h, vh - MENU_BAR_HEIGHT - TASKBAR_HEIGHT - 24);

  const baseX = vw < 720 ? 8 : 160;
  const baseY = vw < 720 ? MENU_BAR_HEIGHT + 16 : MENU_BAR_HEIGHT + 36;
  const x = vw < 720 ? 8 : Math.min(baseX + index * 32, vw - w - 12);
  const y = vw < 720
    ? MENU_BAR_HEIGHT + 16
    : Math.min(baseY + index * 24, vh - h - TASKBAR_HEIGHT - 12);

  return { w, h, x, y };
}

/* -------- A single draggable desktop icon -------- */

const DraggableIcon = ({ icon, x, y, isSelected, onMove, onSelect, onOpen }) => {
  const ref = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e) => {
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      const w = ref.current?.offsetWidth || 64;
      const h = ref.current?.offsetHeight || 80;
      const nx = Math.max(4, Math.min(window.innerWidth - w - 4, cx - dragging.offsetX));
      const ny = Math.max(MENU_BAR_HEIGHT + 4, Math.min(window.innerHeight - h - TASKBAR_HEIGHT - 4, cy - dragging.offsetY));
      onMove(icon.id, nx, ny);
    };
    const handleUp = (e) => {
      const cx = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const cy = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
      const moved = Math.hypot(cx - dragging.startX, cy - dragging.startY);
      setDragging(false);
      if (moved < DRAG_THRESHOLD) {
        // Treat as a click
        onSelect(icon.id);
      }
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [dragging, icon.id, onMove, onSelect]);

  const onPointerDown = (e) => {
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    setDragging({ offsetX: cx - x, offsetY: cy - y, startX: cx, startY: cy });
    e.stopPropagation();
  };

  return (
    <div
      ref={ref}
      className={`desktop-icon ${isSelected ? 'selected' : ''} ${dragging ? 'dragging' : ''}`}
      style={{ left: x, top: y }}
      onMouseDown={onPointerDown}
      onTouchStart={onPointerDown}
      onDoubleClick={(e) => { e.stopPropagation(); onOpen(icon.id); }}
    >
      <IconArt icon={icon.icon} size={56} className="icon-art" alt={icon.label} />
      <span className="icon-label">{icon.label}</span>
    </div>
  );
};

const Desktop = ({ profileData }) => {
  const [windowsById, setWindowsById] = useState({});
  const [order, setOrder] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [openCount, setOpenCount] = useState(0);
  const [iconPositions, setIconPositions] = useState(loadIconPositions);

  const focusWindow = useCallback((id) => {
    setOrder((prev) => {
      if (prev[prev.length - 1] === id) return prev;
      return [...prev.filter((x) => x !== id), id];
    });
    setActiveId(id);
    setWindowsById((prev) =>
      prev[id]?.isMinimized ? { ...prev, [id]: { ...prev[id], isMinimized: false } } : prev
    );
  }, []);

  const openWindow = useCallback((id) => {
    if (!WINDOW_CATALOG[id]) return;
    setWindowsById((prev) => {
      if (prev[id]) {
        return { ...prev, [id]: { ...prev[id], isMinimized: false } };
      }
      const defaults = getWindowDefaults(id, openCount);
      setOpenCount((c) => c + 1);
      return {
        ...prev,
        [id]: {
          id,
          x: defaults.x,
          y: defaults.y,
          width: defaults.w,
          height: defaults.h,
          isMinimized: false,
          isMaximized: false,
        },
      };
    });
    focusWindow(id);
  }, [focusWindow, openCount]);

  // Auto-open the About window once on mount
  useEffect(() => {
    openWindow('about');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load the visitor-map script once on first site visit so the view registers
  // even if the user never opens the Visitors window. The map renders into a
  // permanent hidden host node; VisitorsContent reparents the node when the
  // window opens, preserving the already-rendered map.
  const visitorHostRef = useRef(null);
  useEffect(() => {
    const host = visitorHostRef.current;
    if (!host) return;

    // The mapmyvisitors widget renders a fixed-width SVG with no viewBox, so it
    // overflows (and gets clipped in) narrower windows. Give the SVG a viewBox
    // derived from its width/height so it scales to fit its container; CSS then
    // handles the width. The viewBox makes scaling self-maintaining on resize,
    // so we only need to apply it once the map renders.
    const normalizeMap = () => {
      const svg = host.querySelector('svg');
      if (!svg || svg.getAttribute('viewBox')) return false;
      const w = parseInt(svg.getAttribute('width'), 10) || svg.clientWidth || 600;
      const h = parseInt(svg.getAttribute('height'), 10) || svg.clientHeight || 294;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      return true;
    };

    const observer = new MutationObserver(() => {
      if (normalizeMap()) observer.disconnect();
    });
    observer.observe(host, { childList: true, subtree: true });
    normalizeMap();

    if (!document.getElementById(VISITOR_SCRIPT_ID)) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.id = VISITOR_SCRIPT_ID;
      s.src = VISITOR_SCRIPT_SRC;
      host.appendChild(s);
    }

    return () => observer.disconnect();
  }, []);

  const closeWindow = useCallback((id) => {
    setWindowsById((prev) => {
      if (!prev[id] || prev[id].isClosing) return prev;
      return { ...prev, [id]: { ...prev[id], isClosing: true } };
    });
    setActiveId((prev) => (prev === id ? null : prev));
    setTimeout(() => {
      setWindowsById((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      setOrder((prev) => prev.filter((x) => x !== id));
    }, CLOSE_DURATION);
  }, []);

  const closeAllWindows = useCallback(() => {
    setWindowsById((prev) => {
      const next = {};
      for (const key of Object.keys(prev)) {
        next[key] = { ...prev[key], isClosing: true };
      }
      return next;
    });
    setActiveId(null);
    setTimeout(() => {
      setWindowsById({});
      setOrder([]);
    }, CLOSE_DURATION);
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindowsById((prev) => ({ ...prev, [id]: { ...prev[id], isMinimized: true } }));
    setActiveId((prev) => (prev === id ? null : prev));
  }, []);

  const toggleMaxWindow = useCallback((id) => {
    setWindowsById((prev) => ({ ...prev, [id]: { ...prev[id], isMaximized: !prev[id].isMaximized } }));
    focusWindow(id);
  }, [focusWindow]);

  const moveWindow = useCallback((id, pos) => {
    setWindowsById((prev) => ({ ...prev, [id]: { ...prev[id], x: pos.x, y: pos.y } }));
  }, []);

  const moveIcon = useCallback((id, x, y) => {
    setIconPositions((prev) => {
      const next = { ...prev, [id]: { x, y } };
      try { localStorage.setItem(ICON_POS_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const selectIcon = useCallback((id) => {
    // On mobile / coarse pointers, a single tap opens the window — no
    // double-tap-to-open, since touch users don't naturally select-then-click.
    const isMobile =
      typeof window !== 'undefined' &&
      (window.matchMedia('(max-width: 720px)').matches ||
       window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    if (isMobile) {
      openWindow(id);
      setSelectedIcon(null);
      return;
    }
    setSelectedIcon((cur) => {
      if (cur === id) {
        // second click = open
        openWindow(id);
        return null;
      }
      return id;
    });
  }, [openWindow]);

  const handleTaskbarClick = (id) => {
    const w = windowsById[id];
    if (!w) return;
    if (w.isMinimized) focusWindow(id);
    else if (activeId === id) minimizeWindow(id);
    else focusWindow(id);
  };

  const handleDesktopMouseDown = (e) => {
    if (e.target === e.currentTarget) setSelectedIcon(null);
  };

  const openWindowsList = order
    .map((id) => {
      const w = windowsById[id];
      if (!w) return null;
      return {
        id,
        title: WINDOW_CATALOG[id].title,
        icon: WINDOW_CATALOG[id].icon,
        isMinimized: w.isMinimized,
      };
    })
    .filter(Boolean);

  const openWindowCount = Object.values(windowsById).filter((w) => !w.isClosing).length;

  return (
    <div className="desktop" onMouseDown={handleDesktopMouseDown}>
      <MenuBar
        onOpenWindow={openWindow}
        onCloseAll={closeAllWindows}
        openCount={openWindowCount}
        profileData={profileData}
      />

      <div className="desktop-icons">
        {DESKTOP_ICONS.map((icon) => {
          const pos = iconPositions[icon.id] || { x: 24, y: MENU_BAR_HEIGHT + 24 };
          return (
            <DraggableIcon
              key={icon.id}
              icon={icon}
              x={pos.x}
              y={pos.y}
              isSelected={selectedIcon === icon.id}
              onMove={moveIcon}
              onSelect={selectIcon}
              onOpen={openWindow}
            />
          );
        })}
      </div>

      <DesktopPhotos />

      {/* Persistent off-screen host where the mapmyvisitors widget lives.
          VisitorsContent moves this node into the open window and back. */}
      <div
        id={VISITOR_HOST_ID}
        ref={visitorHostRef}
        className="visitor-map-host"
        aria-hidden="true"
      />

      {order.map((id, i) => {
        const w = windowsById[id];
        if (!w || w.isMinimized) return null;
        const spec = WINDOW_CATALOG[id];
        const isActive = id === activeId;
        return (
          <Window
            key={id}
            id={id}
            title={spec.title}
            icon={spec.icon}
            x={w.x}
            y={w.y}
            width={w.width}
            height={w.height}
            isActive={isActive}
            isMaximized={w.isMaximized}
            isClosing={w.isClosing}
            zIndex={100 + i}
            onFocus={focusWindow}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onToggleMax={toggleMaxWindow}
            onMove={moveWindow}
            bodyClassName={spec.bodyClassName}
          >
            {spec.render({ profileData, onOpen: openWindow })}
          </Window>
        );
      })}

      <Taskbar
        openWindows={openWindowsList}
        activeId={activeId}
        onWindowClick={handleTaskbarClick}
        onStartItem={openWindow}
        profileData={profileData}
      />
    </div>
  );
};

export default Desktop;
