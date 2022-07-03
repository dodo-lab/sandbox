import React from 'react';
import {useUserNamesWithSuspense} from 'utils/user';
import {UserNames} from './UserNames';

type Props = {
  num: number;
  cacheKey: string;
};

export const UserNamesWithSuspense: React.FC<Props> = ({num, cacheKey}) => {
  const userNames = useUserNamesWithSuspense(num, cacheKey);

  return <UserNames userNames={userNames} />;
};
