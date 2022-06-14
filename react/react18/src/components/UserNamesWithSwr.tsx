import {Box, Button} from '@mui/material';
import React from 'react';
import useSWR from 'swr';
import {fetchUserNames} from 'utils/user';
import {UserNames} from './UserNames';

type Props = {
  cacheKey: string;
};

export const UserNamesWithSwr: React.FC<Props> = ({cacheKey}) => {
  const {data, mutate} = useSWR(cacheKey, () => fetchUserNames(1000), {suspense: true});

  return (
    <>
      <Box sx={{mb: 2}}>
        <Button variant="contained" onClick={() => mutate()}>
          mutate
        </Button>
        <Button
          variant="contained"
          sx={{ml: 2}}
          onClick={() => {
            mutate(undefined, {
              populateCache: true,
            });
          }}>
          mutate(populateCache)
        </Button>
      </Box>
      <UserNames userNames={data ?? []} />
    </>
  );
};
