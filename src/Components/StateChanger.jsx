import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FindStateByName, Gamestates } from '../Data';

export default function StateChanger(props) {

    function HandleClick(e){
      let stateToChange = FindStateByName(e.target.id)
      props.UpdateState(stateToChange, !stateToChange.isActive)

      props.setGameStateChecks(Gamestates)
  }

  function StateComponents() {
    let StateComponents = []
    for(let state of props.GameStateChecks){
      StateComponents.push(<FormControlLabel control={<Checkbox id={state.name} checked={state.isActive} onClick={HandleClick}/>} label={state.name} />)
    }
    return StateComponents
  }

  return (
    <FormGroup className={props.className}>
      {StateComponents()}
      
    </FormGroup>
  );
}