import {Button, CircularProgress, Container, Typography} from '@mui/material';
import {UserNamesWithSwrError} from 'components/UserNamesWithSwrError';
import type {NextPage} from 'next';
import {Suspense, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

const Page: NextPage = () => {
  const [key, setKey] = useState('suspense_swr_error' + Math.random());

  return (
    <Container maxWidth="xl">
      <ErrorBoundary
        fallbackRender={({error, resetErrorBoundary}) => (
          <>
            <Typography>Error: {error.message}</Typography>
            <Button
              variant="contained"
              onClick={() => {
                setKey('suspense_swr_error' + Math.random());
                resetErrorBoundary();
              }}>
              retry
            </Button>
          </>
        )}>
        <Suspense fallback={<CircularProgress />}>
          <UserNamesWithSwrError cacheKey={key} />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default Page;
