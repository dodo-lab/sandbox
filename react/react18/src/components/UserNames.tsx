import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {Avatar, Card, Grid, Typography} from '@mui/material';
import React from 'react';

type Props = {
  userNames: string[];
};

export const UserNames: React.FC<Props> = ({userNames}) => {
  return (
    <Grid container spacing={2}>
      {userNames.map((name, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
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
