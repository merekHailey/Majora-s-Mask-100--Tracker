import * as React from 'react';
import Button from '@mui/material/Button';

export default function UndoBtn(props) {

    function HandleClick(e){
        props.Undo()
    }

  return (
      <Button className={"undoBtn"} variant="outlined" onClick={HandleClick}>Undo</Button>
  );
}