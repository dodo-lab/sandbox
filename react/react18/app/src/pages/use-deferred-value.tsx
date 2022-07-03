import {Box, Container, Slider, styled, TextField, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useDeferredValue, useMemo, useState} from 'react';

const BorderBox = styled(Box)({
  flex: 1,
  padding: 16,
  borderStyle: 'solid',
  borderWidth: 1,
});

const Page: NextPage = () => {
  const [text, setText] = useState('');
  const [beforeDeferralText, setBeforeDeferralText] = useState('');
  const deferredText = useDeferredValue(beforeDeferralText);
  const [num, setNum] = useState(1);

  const deferredTextsMemo = useMemo(() => {
    return [...Array(num)].map((_, index) => <Typography key={index}>{deferredText}</Typography>);
  }, [deferredText, num]);

  const textsMemo = useMemo(() => {
    return [...Array(num)].map((_, index) => <Typography key={index}>{text}</Typography>);
  }, [num, text]);

  return (
    <Container maxWidth="xl">
      <Slider
        sx={{my: 4}}
        valueLabelDisplay="auto"
        min={1}
        max={1000}
        value={num}
        onChange={(_, value) => setNum(value as number)}
      />
      <Box sx={{display: 'flex', gap: 4}}>
        <BorderBox>
          <TextField
            fullWidth
            variant="standard"
            label="normalState"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          {textsMemo}
        </BorderBox>
        <BorderBox>
          <TextField
            fullWidth
            variant="standard"
            label="useDeferredValue"
            value={beforeDeferralText}
            onChange={e => setBeforeDeferralText(e.target.value)}
          />
          {deferredTextsMemo}
        </BorderBox>
      </Box>
    </Container>
  );
};

export default Page;
