import {Box, BoxProps, Button, Container, styled, TextField, Typography} from '@mui/material';
import {useRenderingCount} from 'hooks/useRenderingCount';
import type {NextPage} from 'next';
import {useUser} from 'states/useUser';
import shallow from 'zustand/shallow';

const ItemBox = styled(Box)({
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: 2,
});

const Inputs: React.FC<BoxProps> = props => {
  const {name, age, setName, setAge, clear} = useUser(state => ({...state}), shallow);
  const renderingCount = useRenderingCount();

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 2}}>
        <Box>
          <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
          <TextField label="Age" type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
        </Box>
        <Button sx={{mt: 2}} onClick={clear}>
          CLEAR
        </Button>
      </Box>
    </ItemBox>
  );
};

const Show: React.FC<BoxProps> = props => {
  const {name, age, serif} = useUser(state => ({name: state.name, age: state.age, serif: state.serif}), shallow);
  const renderingCount = useRenderingCount();

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 2}}>
        <Typography>Name : {name}</Typography>
        <Typography>Age : {age}</Typography>
        <Typography>{serif()}</Typography>
      </Box>
    </ItemBox>
  );
};

const Page: NextPage = () => {
  const renderingCount = useRenderingCount();

  return (
    <Container maxWidth="xl">
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        {renderingCount}
        <Inputs />
        <Show />
      </Box>
    </Container>
  );
};

export default Page;
