import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { LoadList, UndoList } from '../HelperFunctions';
import ObjCard from './ObjCard';
import UndoBtn from './UndoBtn';
import './ObjCard.css'
import './Tracker.css'
import Labels from './Labels';

export default function Tracker(props){


    const [ShownObjCards, setShownObjCards] = useState(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))

    
  function UndoObjective(){
    if(UndoList.length > 0){
      UndoList.pop().complete = false
      setShownObjCards(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))
      props.UpdateProgress()
    }
  }

  function UpdateShown(){
    setShownObjCards(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))
    props.UpdateProgress()
  }


    return(
        <div className="tracker">
            <Box className='objsList'>
            <nav aria-label="ObjCards"></nav> 
                <List>
                    <Labels/>
                    {ShownObjCards}
                </List>     
            </Box>
            <UndoBtn UndoObjective={UndoObjective}/>
        </div>
    )
}