import { useEffect } from 'react';

export const useLog = (thing, log) => {
  useEffect(()=> {
    console.log(log || thing)
  }, [{thing}])
  return null;
}