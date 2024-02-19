import React, { useState, useEffect } from 'react';
import "./circlefollowmouse.css"
const CircleFollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackMouse = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', trackMouse);
    return () => {
      window.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  return (
    <div className="circle-container">
      <div className="circle" style={{ left: (position.x), top: (position.y) }}></div>
    </div>
  );
};

export default CircleFollowMouse;
