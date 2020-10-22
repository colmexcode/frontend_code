// ------------------------------ import libraries
import { useRef, useEffect, useState } from 'react';

// this function get an html element and return the width and height of it.

export const useGetElementSize = () => {
  const [elementSize, setElementSize] = useState({});
  const section = useRef();

  useEffect(() => {
    setElementSize({
      height: section.current.clientHeight,
      width: section.current.clientWidth,
    });
  }, []);

  return [elementSize, section];
};
