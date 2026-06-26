import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem(key);

    if (stored) {
      return JSON.parse(stored);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}