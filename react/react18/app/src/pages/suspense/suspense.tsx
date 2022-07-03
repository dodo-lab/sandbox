import {CircularProgress, Container} from '@mui/material';
import {UserNamesWithSuspense} from 'components/UserNamesWithSuspense';
import type {NextPage} from 'next';
import {Suspense} from 'react';

const Page: NextPage = () => {
  const key = 'suspense_' + Math.random();

  return (
    <Container maxWidth="xl">
      <Suspense fallback={<CircularProgress />}>
        <UserNamesWithSuspense num={1000} cacheKey={key} />
      </Suspense>
    </Container>
  );
};

export default Page;
