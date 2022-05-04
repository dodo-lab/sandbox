import {Container, FormControlLabel, Slider, Switch, TextField, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useDeferredValue, useMemo, useState} from 'react';

const Page: NextPage = () => {
  const [text, setText] = useState('');
  const [enableMemo, setEnableMemo] = useState(true);
  const [num, setNum] = useState(1);
  const deferredText = useDeferredValue(text);

  console.log('[t]', text);
  console.log('[d]', deferredText);

  const deferredTextsMemo = useMemo(() => {
    return [...Array(num)].map((_, index) => <Typography key={index}>{deferredText}</Typography>);
  }, [deferredText, num]);

  return (
    <Container maxWidth="xl">
      <TextField fullWidth variant="standard" label="input" value={text} onChange={e => setText(e.target.value)} />
      <Slider
        sx={{my: 2}}
        valueLabelDisplay="auto"
        min={1}
        max={1000}
        value={num}
        onChange={(_, value) => setNum(value as number)}
      />
      <FormControlLabel
        control={
          <Switch defaultChecked={enableMemo} value={enableMemo} onChange={(_, checked) => setEnableMemo(checked)} />
        }
        label="メモ化"
      />
      {enableMemo
        ? deferredTextsMemo
        : [...Array(num)].map((_, index) => <Typography key={index}>{deferredText}</Typography>)}
    </Container>
  );
};

export default Page;
