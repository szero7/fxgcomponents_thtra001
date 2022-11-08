import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars({width, height, spacing}) {
  return (
    <AvatarGroup max={4} direction="row" spacing={spacing}>
      <Avatar alt="vador" src="assets/img/01.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="luke" src="assets/img/02.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="han" src="assets/img/03.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="chewbacca" src="assets/img/04.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="leia" src="assets/img/05.jpg" sx={{ width: {width}, height: {height}}}/>
    </AvatarGroup>
  );
}
