import React from 'react';
import useSWR from 'swr';
import {fetchError} from 'utils/user';
import {UserNames} from './UserNames';

type Props = {
  cacheKey: string;
};

export const UserNamesWithSwrError: React.FC<Props> = ({cacheKey}) => {
  const {data} = useSWR(cacheKey, () => fetchError(1000), {suspense: true});

  return <UserNames userNames={data ?? []} />;
};
