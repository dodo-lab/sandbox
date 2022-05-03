import {CircularProgress, Container} from '@mui/material';
import {ErrorFallback} from 'components/ErrorFallback';
import {UserNamesWithSwrError} from 'components/UserNamesWithSwrError';
import type {NextPage} from 'next';
import {Suspense, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

const Page: NextPage = () => {
  const [key, setKey] = useState('suspense_swr_error' + Math.random());

  return (
    <Container maxWidth="xl">
      <ErrorBoundary
        fallbackRender={props => (
          <ErrorFallback {...props} onClick={() => setKey('suspense_swr_error' + Math.random())} />
        )}>
        <Suspense fallback={<CircularProgress />}>
          <UserNamesWithSwrError cacheKey={key} />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default Page;
