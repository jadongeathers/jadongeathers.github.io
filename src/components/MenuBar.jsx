import React, { useEffect, useRef, useState } from 'react';
import { IconArt, ICONS } from './PixelIcon';

const FILE_ITEMS = [
  { id: 'about', label: 'About Me' },
  { id: 'research', label: 'Research' },
  { id: 'chitterchatter', label: 'ChitterChatter' },
  { id: 'highlights', label: 'News' },
  { id: 'cv', label: 'Curriculum Vitae' },
  { id: 'contact', label: 'Contact' },
  { id: 'visitors', label: 'Visitors' },
];

const MenuBar = ({ onOpenWindow, onCloseAll, openCount, profileData }) => {
  const [now, setNow] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState(null);
  const barRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30 * 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!activeMenu) return;
    const handle = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [activeMenu]);

  const date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  const toggleMenu = (name) => setActiveMenu((prev) => (prev === name ? null : name));
  const pick = (fn) => () => { fn(); setActiveMenu(null); };

  return (
    <div className="menu-bar" ref={barRef}>
      <div className="menu-bar-left">
        <button
          className={`menu-trigger logo ${activeMenu === 'jg' ? 'active' : ''}`}
          onClick={() => toggleMenu('jg')}
          aria-haspopup="menu"
        >
          <span>Jadon</span>
        </button>

        <button
          className={`menu-trigger ${activeMenu === 'file' ? 'active' : ''}`}
          onClick={() => toggleMenu('file')}
          aria-haspopup="menu"
        >
          File
        </button>

        <button
          className={`menu-trigger ${activeMenu === 'window' ? 'active' : ''}`}
          onClick={() => toggleMenu('window')}
          aria-haspopup="menu"
        >
          Window
        </button>

        <button
          className={`menu-trigger ${activeMenu === 'help' ? 'active' : ''}`}
          onClick={() => toggleMenu('help')}
          aria-haspopup="menu"
        >
          Help
        </button>

        {activeMenu === 'jg' && (
          <div className="menu-dropdown" style={{ left: 0 }}>
            <div className="menu-dropdown-header">Jadon Geathers</div>
            <ul className="menu-dropdown-roles">
              <li>PhD Student, Cornell</li>
              <li>Co-founder &amp; CEO, ChitterChatter</li>
              <li>Classical Pianist</li>
            </ul>
            <div className="menu-dropdown-sep" />
            <a className="menu-dropdown-item" href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="menu-fa-icon fa-brands fa-linkedin-in" aria-hidden="true" /> LinkedIn
            </a>
            <a className="menu-dropdown-item" href={profileData.links.github} target="_blank" rel="noopener noreferrer">
              <i className="menu-fa-icon fa-brands fa-github" aria-hidden="true" /> GitHub
            </a>
            <a className="menu-dropdown-item" href={profileData.links.scholar} target="_blank" rel="noopener noreferrer">
              <i className="menu-fa-icon fa-solid fa-graduation-cap" aria-hidden="true" /> Google Scholar
            </a>
            <a className="menu-dropdown-item" href={`mailto:${profileData.email}`}>
              <i className="menu-fa-icon fa-solid fa-envelope" aria-hidden="true" /> Email
            </a>
          </div>
        )}

        {activeMenu === 'file' && (
          <div className="menu-dropdown" style={{ left: 72 }}>
            <div className="menu-dropdown-label">Open</div>
            {FILE_ITEMS.map((item) => (
              <button
                key={item.id}
                className="menu-dropdown-item"
                onClick={pick(() => onOpenWindow(item.id))}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {activeMenu === 'window' && (
          <div className="menu-dropdown" style={{ left: 124 }}>
            <div className="menu-dropdown-sub">
              {openCount === 0 ? 'No open windows' : `${openCount} window${openCount === 1 ? '' : 's'} open`}
            </div>
            <div className="menu-dropdown-sep" />
            <button
              className="menu-dropdown-item"
              disabled={openCount === 0}
              onClick={pick(onCloseAll)}
            >
              Close All Windows
            </button>
          </div>
        )}

        {activeMenu === 'help' && (
          <div className="menu-dropdown" style={{ left: 188 }}>
            <button className="menu-dropdown-item" onClick={pick(() => onOpenWindow('contact'))}>
              Get in touch
            </button>
          </div>
        )}
      </div>

      <div className="menu-bar-center" />

      <div className="menu-bar-right">
        <span className="menu-stat">{date}</span>
        <span className="menu-stat divider">·</span>
        <span className="menu-stat clock">{time}</span>
      </div>
    </div>
  );
};

export default MenuBar;
