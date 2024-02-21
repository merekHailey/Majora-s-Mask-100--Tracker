import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { LoadList, UndoList } from '../HelperFunctions';
import ObjCard from './ObjCard';
import UndoBtn from './UndoBtn';

export default function Tracker(props){


    const [ShownObjCards, setShownObjCards] = useState(LoadList().map((Obj) => <ObjCard obj={Obj} UpdateShown={UpdateShown}></ObjCard>))

    
  function UndoObjective(){
    if(UndoList.length > 0){
      UndoList.pop().complete = false
      setShownObjCards(LoadList().map((Obj) => <ObjCard obj={Obj} UpdateShown={UpdateShown}></ObjCard>))
    }
  }

  function UpdateShown(){
    setShownObjCards(LoadList().map((Obj) => <ObjCard obj={Obj} UpdateShown={UpdateShown}></ObjCard>))
  }


    return(
        <div className="tracker">
            <Box sx={{ width: '100%'/*, maxWidth: 360*/, bgcolor: 'background.paper' }}>
            <nav aria-label="ObjCards"></nav> 
                <List>{ShownObjCards}</List>     
            </Box>
            <UndoBtn UndoObjective={UndoObjective}/>
        </div>
    )
}