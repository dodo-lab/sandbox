import {CircularProgress, Container} from '@mui/material';
import {ErrorFallback} from 'components/ErrorFallback';
import {UserNamesWithReactQueryError} from 'components/UserNamesWithReactQueryError';
import type {NextPage} from 'next';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {QueryClient, QueryClientProvider, QueryErrorResetBoundary} from 'react-query';

const Page: NextPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl">
        <QueryErrorResetBoundary>
          {({reset}) => (
            <ErrorBoundary onReset={reset} fallbackRender={props => <ErrorFallback {...props} />}>
              <Suspense fallback={<CircularProgress />}>
                <UserNamesWithReactQueryError />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Container>
    </QueryClientProvider>
  );
};

export default Page;
