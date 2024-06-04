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

export default function Tracker(props){

 

  



    return(
        <div className="tracker">
            <Box className='objsBox'>
            <nav aria-label="ObjCards"></nav> 
                <List id="objsList">
                    <Labels/>
                    {props.ShownObjCards}
                </List>     
            </Box>
            <UndoBtn Undo={props.Undo}/>
            <NextCycle setNextCycle={props.setNextCycle}/>
            <FullReset FullReset={props.FullReset}/>
            <CurrentDayBtn ChangeDay={props.ChangeDay} CurrentDay={props.CurrentDay}/>
        </div>
    )
}