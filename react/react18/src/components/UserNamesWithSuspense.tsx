import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {Avatar, Card, Grid, Typography} from '@mui/material';
import React from 'react';
import {useUserNamesWithSuspense} from 'utils/user';

type Props = {
  cacheKey: string;
};

export const UserNamesWithSuspense: React.FC<Props> = ({cacheKey}) => {
  const userNames = useUserNamesWithSuspense(1000, cacheKey);

  return (
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
  );
};
