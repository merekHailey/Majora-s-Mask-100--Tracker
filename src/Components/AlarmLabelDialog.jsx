import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlarmLabelDialog(props) {
  

  return (
      <Dialog
        open={props.open}
        onClose={props.onClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            console.log(event.target[0].value)
            props.setValueTime(event.target[0].value)
            props.onClose(event.target[0].value);
          },
        }}
      >
        <DialogTitle>Set Alarm</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What is the name of the Alarm?
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="label"
            name="label"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit">Set Alarm</Button>
        </DialogActions>
      </Dialog>
  );
}