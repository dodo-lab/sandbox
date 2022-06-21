import {Box, Typography} from '@mui/material';
import {useRef} from 'react';

export const useRenderingCount = () => {
  const countRef = useRef(0);

  countRef.current++;

  return (
    <Box sx={{backgroundColor: 'lightgray', p: 1}}>
      <Typography>Rendering count: {countRef.current}</Typography>
    </Box>
  );
};
