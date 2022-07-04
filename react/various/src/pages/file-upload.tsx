import {Container} from '@mui/material';
import axios from 'axios';
import type {NextPage} from 'next';
import {ChangeEvent} from 'react';

const Page: NextPage = () => {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const text = await file.text();

      axios({
        method: 'PUT',
        url: '/api/file-upload',
        data: text,
        headers: {
          'Content-Type': file.type,
          'X-FILE-NAME': file.name,
        },
      });
    }
  };

  return (
    <Container maxWidth="xl">
      <input type="file" onChange={handleFileChange} />
    </Container>
  );
};

export default Page;
