import React from 'react';
import './Alarm.css'

export default function Alarm(props){   

    function ClickHandler(e){
        props.RemoveAlarm(props.alarm)
    }
    
    
    return(
        <button className='alarm' id={props.id} onClick={ClickHandler}>
          
                    
                        <div className='label'>{props.alarm.label}</div> 
                        <div className={"day"}>{props.alarm.day}</div> 
                        <div className={"time"}>{props.alarm.time}</div>
                    
                    
        </button>
    )
}

