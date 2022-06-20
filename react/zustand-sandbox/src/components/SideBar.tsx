import styled from '@emotion/styled';
import {Drawer, List, ListItemButton, ListItemText} from '@mui/material';
import {useRouter} from 'next/router';
import React from 'react';

const drawerWidth = 200;

export type LinkItem = {
  name: string;
  link: string;
};

type Props = {
  linkItems: LinkItem[];
};

const CustomDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    width: drawerWidth,
  },
}));

export const SideBar: React.FC<Props> = ({linkItems}) => {
  const router = useRouter();

  return (
    <CustomDrawer variant="permanent" anchor="left" open={true}>
      <List component="nav">
        {linkItems.map(linkItem => (
          <ListItemButton
            selected={router.pathname === `${linkItem.link}`}
            key={linkItem.link}
            onClick={() => router.push(`${linkItem.link}`)}>
            <ListItemText primary={linkItem.name} />
          </ListItemButton>
        ))}
      </List>
    </CustomDrawer>
  );
};
