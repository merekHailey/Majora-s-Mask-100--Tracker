import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { CycleNum, LoadList, UndoList, UpdatePossible, setCycleNum } from '../HelperFunctions';
import ObjCard from './ObjCard';
import UndoBtn from './UndoBtn';
import './ObjCard.css'
import './Tracker.css'
import Labels from './Labels';
import NextCycle from './NextCycle';
import FullReset from './FullReset';

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
            <Box className='objsBox'>
            <nav aria-label="ObjCards"></nav> 
                <List id="objsList">
                    <Labels/>
                    {props.ShownObjCards}
                </List>     
            </Box>
            <UndoBtn UndoObjective={UndoObjective}/>
            <NextCycle setNextCycle={props.setNextCycle}/>
            <FullReset FullReset={props.FullReset}/>
        </div>
    )
}