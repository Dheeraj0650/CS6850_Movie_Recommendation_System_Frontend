import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields(props) {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '18ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-number"
          label="Rating"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          onChange={props.handleRatingChange}
        />
      </div>
    </Box>
  );
}