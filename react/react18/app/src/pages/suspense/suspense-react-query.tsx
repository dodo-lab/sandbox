import {CircularProgress, Container} from '@mui/material';
import {UserNamesWithReactQuery} from 'components/UserNamesWithReactQuery';
import type {NextPage} from 'next';
import {Suspense} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const Page: NextPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl">
        <Suspense fallback={<CircularProgress />}>
          <UserNamesWithReactQuery />
        </Suspense>
      </Container>
    </QueryClientProvider>
  );
};

export default Page;
