import {Box, BoxProps, Button, Container, styled, TextField, Typography} from '@mui/material';
import {useRenderingCount} from 'hooks/useRenderingCount';
import type {NextPage} from 'next';
import {useCallback, useEffect, useReducer, useState} from 'react';
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
  // shallowを使う場合は、必要な要素を明示的に指定する.
  // const {clear, setName, setAge} = useUser(
  //   state => ({clear: state.clear, setName: state.setName, setAge: state.setAge}),
  //   shallow,
  // );

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

const Subscribe: React.FC<BoxProps> = props => {
  const [name, setName] = useState('');
  const [prevName, setPrevName] = useState('');
  const renderingCount = useRenderingCount('Subscribe');

  useEffect(() => {
    const unSubscribe = useUser.subscribe((state, prevState) => {
      setName(state.name);
      setPrevName(prevState.name);
    });
    return unSubscribe;
  }, []);

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 1.5}}>
        <Typography>Name : {name}</Typography>
        <Typography>Previous Name : {prevName}</Typography>
      </Box>
    </ItemBox>
  );
};

const SubscribeWithSelector: React.FC<BoxProps> = props => {
  const [name, setName] = useState('');
  const [nameAndAge, setNameAndAge] = useState('');
  const renderingCount = useRenderingCount('Subscribe with selector');

  useEffect(() => {
    const unSubscribes: (() => void)[] = [];
    unSubscribes.push(
      useUser.subscribe(
        state => state.name,
        name => setName(`My name is ${name}.`),
        {fireImmediately: true},
      ),
    );
    unSubscribes.push(
      useUser.subscribe(
        state => ({name: state.name, age: state.age}),
        ({name, age}) => setNameAndAge(`My name is ${name}.I'm ${age} years old.`),
        {fireImmediately: true, equalityFn: shallow},
      ),
    );

    return () => {
      for (const func of unSubscribes) {
        func();
      }
    };
  }, []);

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 1.5}}>
        <Typography>{name}</Typography>
        <Typography>{nameAndAge}</Typography>
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
        <Subscribe />
        <SubscribeWithSelector />
      </Box>
    </Container>
  );
};

export default Page;
