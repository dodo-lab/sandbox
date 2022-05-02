import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {Avatar, Card, CircularProgress, Container, Grid, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import {fetchUserNames} from 'utils/user';

const Page: NextPage = () => {
  const [userNames, setUserNames] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    fetchUserNames(1000).then(setUserNames);
  }, []);

  if (userNames === undefined) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {userNames.map((name, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <Card sx={{display: 'flex', flexDirection: 'row', padding: 1, alignItems: 'center'}}>
              <Avatar>
                <PermIdentityIcon />
              </Avatar>
              <Typography sx={{ml: 1}}>{name}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Page;
