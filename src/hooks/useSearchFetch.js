// ------------------------------ import libraries
import { useState, useEffect } from 'react';

export const useSearchFetch = (url, location) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(url, {
        method: 'GET',
        body: location,
      });
      const data = await response.json();
      setData(data.data);
    }
    getData(url);
  }, []);

  return data;
};
