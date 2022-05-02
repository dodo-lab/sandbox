import {CircularProgress} from '@mui/material';
import React from 'react';
import {useUserNamesWithFetch} from 'utils/user';
import {UserNames} from './UserNames';

export const UserNamesWithFetch: React.FC = () => {
  const userNames = useUserNamesWithFetch(1000);

  if (userNames === undefined) {
    return <CircularProgress />;
  }

  return <UserNames userNames={userNames} />;
};
