import {Box, Button} from '@mui/material';
import React from 'react';
import {useQuery} from 'react-query';
import {fetchUserNames} from 'utils/user';
import {UserNames} from './UserNames';

export const UserNamesWithReactQuery: React.FC = () => {
  const {data, refetch, remove} = useQuery('suspense_react_query', () => fetchUserNames(1000), {
    suspense: true,
    staleTime: 0,
  });

  return (
    <>
      <Box sx={{mb: 2}}>
        <Button variant="contained" onClick={() => refetch()}>
          refetch
        </Button>
        <Button
          variant="contained"
          sx={{ml: 2}}
          onClick={() => {
            remove();
            refetch();
          }}>
          remove {'&'} refetch
        </Button>
      </Box>
      <UserNames userNames={data ?? []} />
    </>
  );
};
