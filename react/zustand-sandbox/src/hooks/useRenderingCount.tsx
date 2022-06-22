import {Box, Typography} from '@mui/material';
import {useRef} from 'react';

export const useRenderingCount = (title: string = '') => {
  const countRef = useRef(0);

  countRef.current++;

  return (
    <Box sx={{backgroundColor: 'lightgray', p: 0.5, display: 'flex', justifyContent: 'space-between'}}>
      <Typography sx={{fontWeight: 'bold'}}>{title}</Typography>
      <Typography>Rendering count: {countRef.current}</Typography>
    </Box>
  );
};
