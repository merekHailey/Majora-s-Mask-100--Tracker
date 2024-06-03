import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlarmTimeDialog(props) {
  

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
            What time would you like to remind yourself with?
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="time"
            name="time"
            type="time"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit">Set Time</Button>
        </DialogActions>
      </Dialog>
  );
}