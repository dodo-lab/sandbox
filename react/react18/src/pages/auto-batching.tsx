import {Box, Button, Container, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useState} from 'react';
import {flushSync} from 'react-dom';

let renderCount = 0;

const Page: NextPage = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  renderCount++;
  console.log('rendered', count1, count2, count3);

  const increment = () => {
    setTimeout(() => {
      setCount1(c => c + 1);
      setCount2(c => c + 10);
      setCount3(c => c + 100);
    }, 1);
  };

  const increment2 = () => {
    setTimeout(() => {
      setCount1(c => c + 1);
      setCount2(c => c + 10);
      setCount3(c => c + 100);
    }, 1);

    setTimeout(() => {
      setCount1(c => c + 1);
      setCount2(c => c + 10);
      setCount3(c => c + 100);
    }, 1);
  };

  const flushIncrement = () => {
    setTimeout(() => {
      flushSync(() => setCount1(c => c + 1));
      flushSync(() => setCount2(c => c + 10));
      flushSync(() => setCount3(c => c + 100));
    }, 1);
  };

  return (
    <Container maxWidth="xl">
      <Typography>count1: {count1}</Typography>
      <Typography>count2: {count2}</Typography>
      <Typography>count3: {count3}</Typography>
      <Typography sx={{my: 2}}>renderCount: {renderCount}</Typography>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button variant="contained" onClick={increment}>
          increment
        </Button>
        <Button variant="contained" onClick={increment2}>
          increment × 2
        </Button>
        <Button variant="contained" onClick={flushIncrement}>
          increment(React17)
        </Button>
      </Box>
    </Container>
  );
};

export default Page;
