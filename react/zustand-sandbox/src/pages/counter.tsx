import {Container} from '@mui/material';
import {Counter} from 'components/Counter';
import type {NextPage} from 'next';

const Page: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <Counter />
    </Container>
  );
};

export default Page;
