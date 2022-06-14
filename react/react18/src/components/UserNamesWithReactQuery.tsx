import React from 'react';
import {useQuery} from 'react-query';
import {fetchUserNames} from 'utils/user';
import {UserNames} from './UserNames';

export const UserNamesWithReactQuery: React.FC = () => {
  const {data} = useQuery('suspense_react_query', () => fetchUserNames(1000), {
    suspense: true,
  });

  return <UserNames userNames={data ?? []} />;
};
