import { useEffect, useState } from 'react';
import * as store from './store';

export { default as cache } from './cache';
export { default as typeDefs } from './typeDefs';

export const useStore = () => {
  const [storeObj, setStoreObj] = useState(store);

  useEffect(() => {
    setStoreObj(store);
  }, []);

  return storeObj;
};

export default store;
