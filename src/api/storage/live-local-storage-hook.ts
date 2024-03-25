import { useState, useEffect } from 'react';

const useChromeStorageLiveUpdate = storageKey => {
  const [value, setValue] = useState(() => {
    // Initialize the state with the current value from localStorage
    const storedValue = localStorage.getItem(storageKey);
    return storedValue !== null ? JSON.parse(storedValue) : undefined;
  });

  const handleStorageChange = () => {
    // Update the state with the new value from localStorage
    const storedValue = localStorage.getItem(storageKey);
    setValue(storedValue !== null ? JSON.parse(storedValue) : undefined);
  };

  useEffect(() => {
    // Add listener for changes in localStorage
    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Remove the listener when the component is unmounted
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [storageKey]);

  return value;
};

export default useChromeStorageLiveUpdate;
