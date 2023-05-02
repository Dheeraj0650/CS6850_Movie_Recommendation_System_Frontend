import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">Cosine and TF-IDF</Button>,
  <Button key="two">Cosine and Count Vec</Button>,
  <Button key="three">KNN and TF-IDF</Button>,
  <Button key="two">KNN and Count Vec</Button>,
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
            aria-label="vertical contained button group"
            variant="contained"
            onClick={props.handlePredictBy}
        >
            {buttons}
        </ButtonGroup>
        </Box>
    );
}