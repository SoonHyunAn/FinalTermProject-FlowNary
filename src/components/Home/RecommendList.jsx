import * as React from 'react';
import { List, ListItem, Divider, Typography, ListItemAvatar, Avatar, Button } from '@mui/material';



export default function RecommendList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:10 }}>
      <h3 style={{textAlign:'center'}}>친구 추천 목록</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Typography>
            안순현
          </Typography>
        </ListItem>
        <Button sx={{ marginRight: 3 }}>팔로우</Button>
      </div>
      <Divider variant="inset" component="li" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <Typography>
            윤영준
          </Typography>
        </ListItem>
        <Button sx={{ marginRight: 3 }}>팔로우</Button>
      </div>
      <Divider variant="inset" component="li" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <Typography>
          곽주영
        </Typography>
      </ListItem>
      <Button sx={{ marginRight: 3 }}>팔로우</Button>
      </div>
      <Divider variant="inset" component="li" />
    </List>

  );
}