import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { LoadList, UndoList } from '../HelperFunctions';
import ObjCard from './ObjCard';
import UndoBtn from './UndoBtn';
import './ObjCard.css'
import './Tracker.css'
import Labels from './Labels';

export default function Tracker(props){

    
  function UndoObjective(){
    if(UndoList.length > 0){
      UndoList.pop().complete = false
      props.setShownObjCards(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={props.UpdateShown}></ObjCard>))
      props.UpdateProgress()
    }
  }



    return(
        <div className="tracker">
            <Box className='objsList'>
            <nav aria-label="ObjCards"></nav> 
                <List>
                    <Labels/>
                    {props.ShownObjCards}
                </List>     
            </Box>
            <UndoBtn UndoObjective={UndoObjective}/>
        </div>
    )
}