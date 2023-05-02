import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">Content Based</Button>,
  <Button key="two">Collaborative</Button>,
];

export default function GroupOrientation(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        onClick={props.handleMethodChange}
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}