import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Box, Button, styled, Typography} from '@mui/material';
import {BoxProps} from '@mui/system';
import React from 'react';
import {useCounter} from 'states/useCounter';

const WrapBox = styled(Box)({
  display: 'flex',
  gap: 8,
});

export const Counter: React.FC<BoxProps> = props => {
  const {count, increment, decrement} = useCounter();

  return (
    <WrapBox {...props}>
      <Button variant="outlined" onClick={decrement}>
        <RemoveIcon />
      </Button>
      <Box sx={{width: 80}}>
        <Typography sx={{textAlign: 'center'}} fontSize={24}>
          {count}
        </Typography>
      </Box>
      <Button variant="outlined" onClick={increment}>
        <AddIcon />
      </Button>
    </WrapBox>
  );
};
