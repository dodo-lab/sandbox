import {Box, CircularProgress, Container, FormControlLabel, Slider, Switch} from '@mui/material';
import {Shape} from 'components/Shape';
import type {NextPage} from 'next';
import {useMemo, useState, useTransition} from 'react';

const SIZE = 400;

const Page: NextPage = () => {
  const [isPending, startTransition] = useTransition();
  const [generate, setGenerate] = useState(3);
  const [total, setTotal] = useState(3);
  const [enableTransition, setEnableTransition] = useState(true);

  const shape = useMemo(
    () => (
      <Box sx={{border: 1, width: SIZE, height: SIZE, position: 'relative'}}>
        <Shape total={total} current={0} generate={generate} baseRadius={0} x={SIZE * 0.5} y={SIZE * 0.5} />
      </Box>
    ),
    [generate, total],
  );

  return (
    <Container maxWidth="xl">
      <FormControlLabel
        control={
          <Switch
            defaultChecked={true}
            value={enableTransition}
            onChange={(_, checked) => setEnableTransition(checked)}
          />
        }
        label="useTransition"
      />
      <Slider
        sx={{mt: 4}}
        valueLabelDisplay="auto"
        min={3}
        max={5}
        onChange={(_, value) => {
          if (enableTransition) {
            startTransition(() => {
              setGenerate(value as number);
            });
          } else {
            setGenerate(value as number);
          }
        }}
      />
      <Slider
        sx={{my: 2}}
        valueLabelDisplay="auto"
        min={3}
        max={8}
        onChange={(_, value) => {
          if (enableTransition) {
            startTransition(() => {
              setTotal(value as number);
            });
          } else {
            setTotal(value as number);
          }
        }}
      />
      {shape}
      {isPending && <CircularProgress />}
    </Container>
  );
};

export default Page;
