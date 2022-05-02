import faker from '@faker-js/faker';

function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

export async function fetchUserNames(num: number) {
  await sleep(500 + Math.floor(Math.random() * 500));
  return [...Array(num)].map(_ => faker.name.firstName());
}
