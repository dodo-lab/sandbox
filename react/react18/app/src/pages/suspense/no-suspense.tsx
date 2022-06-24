import {Container} from '@mui/material';
import {UserNamesWithFetch} from 'components/UserNamesWithFetch';
import type {NextPage} from 'next';

const Page: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <UserNamesWithFetch />
    </Container>
  );
};

export default Page;
