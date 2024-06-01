import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function StateChanger(props) {

    function HandleClick(e){
      if(e.target.id === "boatAccess"){
        props.setBoatAccessChecked(!props.boatAccessChecked)
        props.UpdateState("Boat Access", !props.boatAccessChecked)
      }
      else if(e.target.id === "grandmaSaved"){
        props.setGrandmaSavedChecked(!props.grandmaSavedChecked)
        props.UpdateState("Grandma Saved", !props.grandmaSavedChecked)
      }

      else if(e.target.id === "romaniFriended"){
      props.setRomaniFriendedChecked(!props.romaniFriendedChecked)
      props.UpdateState("Romani Friended", !props.romaniFriendedChecked)
    }
  }

  return (
    <FormGroup className={props.className}>
      <FormControlLabel control={<Checkbox id='boatAccess' checked={props.boatAccessChecked} onClick={HandleClick}/>} label="Boat Access" />
      <FormControlLabel control={<Checkbox id='grandmaSaved' checked={props.grandmaSavedChecked} onClick={HandleClick}/>} label="Grandma Saved"/>
      <FormControlLabel control={<Checkbox id='romaniFriended' checked={props.romaniFriendedChecked} onClick={HandleClick}/>} label="Romani Friended" />
    </FormGroup>
  );
}