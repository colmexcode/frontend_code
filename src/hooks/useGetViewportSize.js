// ------------------------------ import libraries
import { useState, useEffect } from 'react';

// this function get the width and height of the viewport.

export const useGetViewportSize = () => {
  const [viewportSize, setviewportSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    setviewportSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  return viewportSize;
};
