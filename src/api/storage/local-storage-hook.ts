import { useEffect, useState } from 'react';
import { StorageKeys } from './keys';

export const useChromeStorageLocalGet = <T>(storageKey: keyof typeof StorageKeys, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const getData = () => {
    localStorage.get([storageKey], result => {
      if (result && result[storageKey] !== undefined) {
        setValue(result[storageKey]);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return value;
};

export const useChromeStorageLocalSet = <T>(storageKey: keyof typeof StorageKeys) => {
  const setData = (newValue: T) => {
    localStorage.setItem(storageKey, JSON.stringify(newValue));
  };

  return setData;
};
