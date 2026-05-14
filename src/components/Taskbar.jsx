import React, { useEffect, useRef, useState } from 'react';
import { IconArt, ICONS } from './PixelIcon';

const Taskbar = ({ openWindows, activeId, onWindowClick, onStartItem, profileData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const startItems = [
    { label: 'About Me', icon: 'images/icons/about.png', action: () => onStartItem('about') },
    { label: 'Research', icon: 'images/icons/research.png', action: () => onStartItem('research') },
    { label: 'ChitterChatter', icon: 'images/icons/chitterchatter.png', action: () => onStartItem('chitterchatter') },
    { label: 'News', icon: 'images/icons/news.png', action: () => onStartItem('highlights') },
    { label: 'CV', icon: 'images/icons/cv.png', action: () => onStartItem('cv') },
    { label: 'Contact', icon: 'images/icons/contact.png', action: () => onStartItem('contact') },
    { label: 'Visitors', icon: 'images/icons/visitors.png', action: () => onStartItem('visitors') },
    { separator: true },
    { label: 'GitHub', faIcon: 'fa-brands fa-github', href: profileData.links.github },
    { label: 'LinkedIn', faIcon: 'fa-brands fa-linkedin-in', href: profileData.links.linkedin },
    { label: 'Scholar', faIcon: 'fa-solid fa-graduation-cap', href: profileData.links.scholar },
    { label: 'Email', faIcon: 'fa-solid fa-envelope', href: `mailto:${profileData.email}` },
  ];

  return (
    <>
      {menuOpen && (
        <div className="start-menu" ref={menuRef} role="menu">
          <div className="start-menu-banner">
            Jadon&apos;s Desktop 95
            <small>Cornell University · Information Science</small>
          </div>
          <div className="start-menu-items">
            {startItems.map((item, i) =>
              item.separator ? (
                <div key={`sep-${i}`} className="start-menu-sep" />
              ) : item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="start-menu-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.faIcon
                    ? <i className={`sm-fa-icon ${item.faIcon}`} aria-hidden="true" />
                    : item.noIcon
                      ? <span className="sm-icon" aria-hidden="true" />
                      : <IconArt icon={item.icon} size={18} className="sm-icon" />}
                  <span>{item.label}</span>
                </a>
              ) : (
                <button
                  key={item.label}
                  className="start-menu-item"
                  onClick={() => { item.action(); setMenuOpen(false); }}
                >
                  {item.faIcon
                    ? <i className={`sm-fa-icon ${item.faIcon}`} aria-hidden="true" />
                    : item.noIcon
                      ? <span className="sm-icon" aria-hidden="true" />
                      : <IconArt icon={item.icon} size={18} className="sm-icon" />}
                  <span>{item.label}</span>
                </button>
              )
            )}
          </div>
        </div>
      )}

      <div className="taskbar">
        <button className="start-btn" onClick={() => setMenuOpen((v) => !v)}>
          <span>Start</span>
        </button>

        <div className="taskbar-divider" />

        <div className="taskbar-windows">
          {openWindows.map((w) => (
            <button
              key={w.id}
              className={`taskbar-window-btn ${activeId === w.id && !w.isMinimized ? 'active' : ''}`}
              onClick={() => onWindowClick(w.id)}
              title={w.title}
            >
              {w.icon && <IconArt icon={w.icon} size={14} className="tb-icon" />}
              <span>{w.title}</span>
            </button>
          ))}
        </div>

      </div>
    </>
  );
};

export default Taskbar;
