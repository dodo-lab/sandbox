import React from 'react';
import {useUserNamesWithSuspense} from 'utils/user';
import {UserNames} from './UserNames';

type Props = {
  cacheKey: string;
};

export const UserNamesWithSuspense: React.FC<Props> = ({cacheKey}) => {
  const userNames = useUserNamesWithSuspense(1000, cacheKey);

  return <UserNames userNames={userNames} />;
};
