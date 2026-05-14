import React, { useEffect, useRef, useState } from 'react';
import { IconArt } from './PixelIcon';

const TASKBAR_HEIGHT = 36;
const MENU_BAR_HEIGHT = 30;

const Window = ({
  id,
  title,
  icon,
  x,
  y,
  width,
  height,
  isActive,
  isMaximized,
  isClosing,
  zIndex,
  onFocus,
  onClose,
  onMinimize,
  onToggleMax,
  onMove,
  children,
  bodyClassName = '',
  statusLeft,
  statusRight,
}) => {
  const [drag, setDrag] = useState(null);
  const [isOpening, setIsOpening] = useState(true);
  const titleBarRef = useRef(null);

  // Strip the entry-animation class shortly after mount so it doesn't replay
  // when the window re-renders during drag, focus changes, etc.
  useEffect(() => {
    const t = setTimeout(() => setIsOpening(false), 240);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!drag) return;

    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const nextX = clientX - drag.offsetX;
      const nextY = clientY - drag.offsetY;
      onMove(id, clampPosition(nextX, nextY, width, height));
    };

    const handleUp = () => setDrag(null);

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
  }, [drag, id, width, height, onMove]);

  const handleDragStart = (e) => {
    if (isMaximized) return;
    onFocus(id);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setDrag({ offsetX: clientX - x, offsetY: clientY - y });
  };

  const winStyle = isMaximized
    ? {
        left: 0,
        top: MENU_BAR_HEIGHT,
        width: '100vw',
        height: `calc(100dvh - ${MENU_BAR_HEIGHT + TASKBAR_HEIGHT}px - env(safe-area-inset-bottom, 0px))`,
        zIndex,
      }
    : {
        left: x,
        top: y,
        width,
        height,
        zIndex,
      };

  return (
    <div
      className={`window ${isOpening && !isClosing ? 'opening' : ''} ${drag ? 'dragging' : ''} ${isClosing ? 'closing' : ''}`}
      style={winStyle}
      onMouseDown={() => onFocus(id)}
    >
      <div
        ref={titleBarRef}
        className={`window-titlebar ${isActive ? '' : 'inactive'}`}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onDoubleClick={() => onToggleMax(id)}
      >
        <div className="window-title">
          {icon && <IconArt icon={icon} size={18} className="title-icon" />}
          <span>{title}</span>
        </div>
        <div className="window-buttons">
          <button className="titlebar-btn" onClick={(e) => { e.stopPropagation(); onMinimize(id); }} aria-label="Minimize">−</button>
          <button className="titlebar-btn" onClick={(e) => { e.stopPropagation(); onToggleMax(id); }} aria-label="Maximize">+</button>
          <button className="titlebar-btn close" onClick={(e) => { e.stopPropagation(); onClose(id); }} aria-label="Close">×</button>
        </div>
      </div>

      <div className={`window-body ${bodyClassName}`}>
        {children}
      </div>

      {(statusLeft || statusRight) && (
        <div className="window-statusbar">
          <span>{statusLeft}</span>
          <span>{statusRight}</span>
        </div>
      )}
    </div>
  );
};

function clampPosition(x, y, w, h) {
  const maxX = Math.max(0, window.innerWidth - 80);
  const maxY = Math.max(0, window.innerHeight - TASKBAR_HEIGHT - 28);
  // Allow window to go partially off-screen but always keep title bar reachable
  const minX = -(w - 80);
  const minY = MENU_BAR_HEIGHT;
  return {
    x: Math.min(maxX, Math.max(minX, x)),
    y: Math.min(maxY, Math.max(minY, y)),
  };
}

export default Window;
