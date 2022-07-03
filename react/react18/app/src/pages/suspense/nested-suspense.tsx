import {Box, CircularProgress, Container} from '@mui/material';
import {UserNamesWithSuspense} from 'components/UserNamesWithSuspense';
import type {NextPage} from 'next';
import {Suspense} from 'react';

const Page: NextPage = () => {
  const key1 = 'nested_suspense1_' + Math.random();
  const key2 = 'nested_suspense2_' + Math.random();

  console.log('key1', key1);
  console.log('key2', key2);

  return (
    <Container maxWidth="xl">
      <Suspense fallback={<CircularProgress />}>
        <UserNamesWithSuspense num={3} cacheKey={key1} />
        <Box sx={{mt: 4, ml: 4}}>
          <Suspense fallback={<CircularProgress />}>
            <UserNamesWithSuspense num={3} cacheKey={key2} />
          </Suspense>
        </Box>
      </Suspense>
    </Container>
  );
};

export default Page;
