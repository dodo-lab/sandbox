import {Button, Typography} from '@mui/material';
import React, {ComponentProps} from 'react';
import {FallbackProps} from 'react-error-boundary';

type Props = FallbackProps & {
  onClick?: ComponentProps<typeof Button>['onClick'];
};

export const ErrorFallback: React.FC<Props> = props => {
  return (
    <>
      <Typography>Error: {props.error.message}</Typography>
      <Button
        variant="contained"
        onClick={event => {
          props.onClick?.(event);
          props.resetErrorBoundary();
        }}>
        retry
      </Button>
    </>
  );
};
