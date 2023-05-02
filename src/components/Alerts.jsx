import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props) {
  setTimeout(() => {
    props.closeAlert(false);
  }, 3000)
  return (
    <div className='alert-container'>
        <Stack sx={{width: '35%', marginTop:"1rem"}} spacing={2}>
            <Alert onClose={() => {props.closeAlert(false)}} variant="outlined" severity="success">
                Predicting the movies {props.predictBy}
            </Alert>
        </Stack>
    </div>
  );
}