import {CircularProgress, Container} from '@mui/material';
import {ErrorFallback} from 'components/ErrorFallback';
import {UserNamesWithReactQueryError} from 'components/UserNamesWithReactQueryError';
import type {NextPage} from 'next';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {QueryClient, QueryClientProvider, useQueryErrorResetBoundary} from 'react-query';

const Page: NextPage = () => {
  const queryClient = new QueryClient();
  const {reset} = useQueryErrorResetBoundary();

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl">
        <ErrorBoundary onReset={reset} fallbackRender={props => <ErrorFallback {...props} />}>
          <Suspense fallback={<CircularProgress />}>
            <UserNamesWithReactQueryError />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </QueryClientProvider>
  );
};

export default Page;
