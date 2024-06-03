import React from 'react';
import ListItem from '@mui/material/ListItem';
import './Alarm.css'

export default function Alarm(props){   

    function ClickHandler(e){
        props.RemoveAlarm(props.alarm)
    }
    
    
    return(
        <button id={props.id} onClick={ClickHandler}>
            <div>
                <ListItem disablePadding >
                    
                    <div className={"Alarm"}>
                        <span className='label'>{props.alarm.label}</span> <span className={"day"}>{props.alarm.day}</span> <span className={"time"}>{props.alarm.time}</span>
                    </div>
                    
                </ListItem>
            </div>
        </button>
    )
}

