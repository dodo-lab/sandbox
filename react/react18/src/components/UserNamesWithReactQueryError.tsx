import React from 'react';
import {useQuery} from 'react-query';
import {fetchError} from 'utils/user';
import {UserNames} from './UserNames';

export const UserNamesWithReactQueryError: React.FC = () => {
  const {data} = useQuery('suspense_react_query_error', () => fetchError(1000), {
    suspense: true,
    cacheTime: 0,
    retry: 0,
  });

  return <UserNames userNames={data ?? []} />;
};
