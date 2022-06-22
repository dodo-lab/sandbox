import {Box, BoxProps, Button, Container, styled, TextField, Typography} from '@mui/material';
import {useRenderingCount} from 'hooks/useRenderingCount';
import type {NextPage} from 'next';
import {useCallback, useReducer} from 'react';
import {useUser} from 'states/useUser';
import shallow from 'zustand/shallow';

const ItemBox = styled(Box)({
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: 2,
});

const Inputs: React.FC<BoxProps> = props => {
  // 全ての要素に対して、shallowによる差分検知でレンダリングを最適化.
  const {name, age, setName, setAge} = useUser(state => ({...state}), shallow);
  const renderingCount = useRenderingCount('Inputs');

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 1.5}}>
        <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Age" type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
      </Box>
    </ItemBox>
  );
};

const Actions: React.FC<BoxProps> = props => {
  // selectorで1つの要素を返すだけなら、shallowは不要.
  const clear = useUser(state => state.clear);
  const setName = useUser(state => state.setName);
  const setAge = useUser(state => state.setAge);
  const renderingCount = useRenderingCount('Actions');

  const empty = useCallback(() => {
    setName('');
    setAge(0);
  }, [setAge, setName]);

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 1.5}}>
        <Button onClick={clear}>CLEAR</Button>
        <Button onClick={empty}>Set empty</Button>
      </Box>
    </ItemBox>
  );
};

const Show: React.FC<BoxProps> = props => {
  // 特定の要素に対して、shallowによる差分検知でレンダリングを最適化.
  const {name, age, serif} = useUser(state => ({name: state.name, age: state.age, serif: state.serif}), shallow);
  const renderingCount = useRenderingCount('Show');

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 1.5}}>
        <Typography>Name : {name}</Typography>
        <Typography>Age : {age}</Typography>
        <Typography>{serif()}</Typography>
      </Box>
    </ItemBox>
  );
};

const NonReactive: React.FC<BoxProps> = props => {
  const {name, age, serif, clear} = useUser.getState();
  const [, update] = useReducer(v => !v, false);
  const renderingCount = useRenderingCount('Non-Reactive');

  const show = () => {
    const user = useUser.getState();
    const message = `${user.name}\n${user.age}\n${user.serif()}`;
    alert(message);
  };

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 1.5}}>
        <Box>
          <Typography>Name : {name}</Typography>
          <Typography>Age : {age}</Typography>
          <Typography>{serif()}</Typography>
        </Box>
        <Button onClick={update}>update</Button>
        <Button onClick={show}>show</Button>
        <Button onClick={clear}>clear</Button>
      </Box>
    </ItemBox>
  );
};

const Page: NextPage = () => {
  const renderingCount = useRenderingCount();

  return (
    <Container maxWidth="xl">
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        {renderingCount}
        <Inputs />
        <Actions />
        <Show />
        <NonReactive />
      </Box>
    </Container>
  );
};

export default Page;
