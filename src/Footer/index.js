import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography
      color='textSecondary'
      align='center'
      style={{ paddingTop: '10px' }}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://ydvsailendar.github.io/'>
        ydvsailendar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
