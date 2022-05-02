import faker from '@faker-js/faker';

const usersMap = new Map<string, string[]>();

function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

export async function fetchUserNames(num: number) {
  await sleep(500 + Math.floor(Math.random() * 500));
  return [...Array(num)].map(_ => faker.name.firstName());
}

export function useUserNamesWithSuspense(num: number, key: string) {
  const cacheData = usersMap.get(key);
  if (cacheData === undefined) {
    console.log('throw');
    throw fetchUserNames(num).then(users => usersMap.set(key, users));
  }

  return cacheData;
}
