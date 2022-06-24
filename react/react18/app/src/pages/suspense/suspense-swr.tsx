import {CircularProgress, Container} from '@mui/material';
import {UserNamesWithSwr} from 'components/UserNamesWithSwr';
import type {NextPage} from 'next';
import {Suspense} from 'react';

const Page: NextPage = () => {
  const key = 'suspense_swr_' + Math.random();

  return (
    <Container maxWidth="xl">
      <Suspense fallback={<CircularProgress />}>
        <UserNamesWithSwr cacheKey={key} />
      </Suspense>
    </Container>
  );
};

export default Page;
