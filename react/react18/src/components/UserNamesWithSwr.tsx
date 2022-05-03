import React from 'react';
import useSWR from 'swr';
import {fetchUserNames} from 'utils/user';
import {UserNames} from './UserNames';

type Props = {
  cacheKey: string;
};

export const UserNamesWithSwr: React.FC<Props> = ({cacheKey}) => {
  const {data} = useSWR(cacheKey, () => fetchUserNames(1000), {suspense: true});

  return <UserNames userNames={data ?? []} />;
};
