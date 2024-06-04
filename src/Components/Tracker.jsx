import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import UndoBtn from './UndoBtn';
import './ObjCard.css'
import './Tracker.css'
import Labels from './Labels';
import NextCycle from './NextCycle';
import FullReset from './FullReset';
import CurrentDayBtn from './CurrentDayBtn';
import SeeAllObjsBtn from './SeeAllObjsBtn';

export default function Tracker(props){

 

    function setId(){
        if(props.allShown){
            return "isAll"
        }
    }
  



    return(
        <div className="tracker">
            <Box className='objsBox'>
            <nav aria-label="ObjCards"></nav> 
                <List className="objsList">
                    <Labels className={"labels"}/>
                    {props.ShownObjCards}
                </List>     
            </Box>
            <UndoBtn Undo={props.Undo}/>
            <NextCycle setNextCycle={props.setNextCycle}/>
            <FullReset FullReset={props.FullReset}/>
            <CurrentDayBtn ChangeDay={props.ChangeDay} CurrentDay={props.CurrentDay}/>
            <SeeAllObjsBtn id={setId()} ToggleAll={props.ToggleAll}/>
        </div>
    )
}