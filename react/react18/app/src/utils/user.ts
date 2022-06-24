import faker from '@faker-js/faker';
import {useEffect, useState} from 'react';

const usersMap = new Map<string, string[]>();

function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

export async function fetchError(num: number) {
  await sleep(500 + Math.floor(Math.random() * 500));
  throw Error('not found');
  return [...Array(num)].map(_ => faker.name.firstName());
}

export async function fetchUserNames(num: number) {
  await sleep(500 + Math.floor(Math.random() * 500));
  return [...Array(num)].map(_ => faker.name.firstName());
}

export function useUserNamesWithFetch(num: number) {
  const [userNames, setUserNames] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    fetchUserNames(num).then(setUserNames);
  }, [num]);

  return userNames;
}

export function useUserNamesWithSuspense(num: number, key: string) {
  const cacheData = usersMap.get(key);
  if (cacheData === undefined) {
    throw fetchUserNames(num).then(users => usersMap.set(key, users));
  }

  return cacheData;
}
