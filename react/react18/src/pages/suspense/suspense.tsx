import {CircularProgress, Container} from '@mui/material';
import {UserNamesWithSuspense} from 'components/UserNamesWithSuspense';
import type {NextPage} from 'next';
import {Suspense} from 'react';

const Page: NextPage = () => {
  const key = 'suspense_' + Math.random();

  return (
    <Suspense fallback={<CircularProgress />}>
      <Container maxWidth="xl">
        <UserNamesWithSuspense cacheKey={key} />
      </Container>
    </Suspense>
  );
};

export default Page;
