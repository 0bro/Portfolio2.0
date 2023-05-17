"use client";

import React, { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    const showCursor = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <img
      src="/MousePointer.svg"
      alt="Custom cursor"
      className={styles.customCursor}
      style={cursorStyle}
    />
  );
};

export default CustomCursor;
