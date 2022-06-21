import {Box, BoxProps, Container, styled, TextField} from '@mui/material';
import {useRenderingCount} from 'hooks/useRenderingCount';
import type {NextPage} from 'next';
import {useUser} from 'states/useUser';

const ItemBox = styled(Box)({
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: 2,
});

const Inputs: React.FC<BoxProps> = props => {
  const {name, age, setName, setAge} = useUser();
  const renderingCount = useRenderingCount();

  return (
    <ItemBox {...props}>
      {renderingCount}
      <Box sx={{p: 2}}>
        <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Age" type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
      </Box>
    </ItemBox>
  );
};

const Page: NextPage = () => {
  const renderingCount = useRenderingCount();

  return (
    <Container maxWidth="xl">
      {renderingCount}
      <Inputs sx={{mt: 2}} />
    </Container>
  );
};

export default Page;
