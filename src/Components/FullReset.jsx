import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FullReset(props) {

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (isReset) =>{
    if(isReset)
        props.FullReset()
    setOpen(false);
  };




  return (
    <div>
      <Button className={"fullResetBtn"} variant="outlined" onClick={handleClickOpen}>Reset Game</Button>

      
  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to reset the WHOLE run?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will reset absolutely everything, bringing you back to the very begining of a new game file.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Resume Run</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}