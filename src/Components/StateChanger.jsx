import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function StateChanger(props) {

    function handleClick(e){
        props.setBoatAccessChecked(!props.boatAccessChecked)
        props.UpdateState(!props.boatAccessChecked)
    }
  return (
    <FormGroup className={props.className}>
      <FormControlLabel control={<Checkbox checked={props.boatAccessChecked} onClick={handleClick}/>} label="Boat Access" />
      <FormControlLabel control={<Checkbox />} label="Deed Quest Started" />
      <FormControlLabel control={<Checkbox />} label="Swamp Cleared" />
    </FormGroup>
  );
}