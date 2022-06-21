import {Box, Card, CardContent, CardProps, Container, TextField} from '@mui/material';
import {useRenderingCount} from 'hooks/useRenderingCount';
import type {NextPage} from 'next';
import {useUser} from 'states/useUser';

const Inputs: React.FC<CardProps> = props => {
  const {name, age, setName, setAge} = useUser();
  const renderingCount = useRenderingCount();

  return (
    <Card {...props}>
      <CardContent>
        {renderingCount}
        <Box sx={{mt: 2}}>
          <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
          <TextField label="Age" type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
        </Box>
      </CardContent>
    </Card>
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
