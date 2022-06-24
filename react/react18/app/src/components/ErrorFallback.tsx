import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {Box, Button, styled, Typography} from '@mui/material';
import React, {ComponentProps} from 'react';
import {FallbackProps} from 'react-error-boundary';

type Props = FallbackProps & {
  onClick?: ComponentProps<typeof Button>['onClick'];
};

const ErrorMessageBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 300,
  padding: 20,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: 'red',
});

export const ErrorFallback: React.FC<Props> = props => {
  return (
    <>
      <ErrorMessageBox>
        <ErrorOutlineIcon sx={{width: 36, height: 36, color: 'red'}} />
        <Typography variant="h5" color="red">
          {props.error.message}
        </Typography>
      </ErrorMessageBox>
      <Button
        variant="contained"
        sx={{mt: 2}}
        onClick={event => {
          props.onClick?.(event);
          props.resetErrorBoundary();
        }}>
        retry
      </Button>
    </>
  );
};
