import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
    };
    
    const handleLinkHover = () => {
      cursor.classList.add('hover');
      cursorDot.classList.add('hover');
    };
    
    const handleLinkLeave = () => {
      cursor.classList.remove('hover');
      cursorDot.classList.remove('hover');
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    const links = document.querySelectorAll('a, button, .project-card, .filter-btn, .tab-btn');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>
    </>
  );
};

export default Cursor;
