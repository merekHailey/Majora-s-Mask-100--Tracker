import * as React from 'react';
import Button from '@mui/material/Button';

export default function NextCycle(props) {

    function HandleClick(e){
        props.setNextCycle()
    }

  return (
      <Button className={"nextCycleBtn"} variant="outlined" onClick={HandleClick}>Next Cycle</Button>
  );
}