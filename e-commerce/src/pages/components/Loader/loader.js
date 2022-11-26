import Backdrop from '@mui/material/Backdrop';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

function Loader() {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!open}
        
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
}

export default Loader;