import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Box, Button, Container, Typography} from '@mui/material';
import {useRenderingCount} from 'hooks/useRenderingCount';
import type {NextPage} from 'next';
import {useCounter} from 'states/useCounter';

const Page: NextPage = () => {
  const {count, increment, decrement} = useCounter();
  const renderingCount = useRenderingCount();

  return (
    <Container maxWidth="xl">
      {renderingCount}
      <Box sx={{mt: 2, display: 'flex', gap: 2}}>
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
      </Box>
    </Container>
  );
};

export default Page;
