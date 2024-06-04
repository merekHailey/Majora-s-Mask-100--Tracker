import * as React from 'react';
import Button from '@mui/material/Button';
import { allShown } from '../HelperFunctions';

export default function SeeAllObjsBtn(props) {

    function HandleClick(e){
        props.ToggleAll(!allShown)
    }

  return (
      <Button className={"seeAllObjsBtn"} variant="outlined" onClick={HandleClick}>See All</Button>
  );
}