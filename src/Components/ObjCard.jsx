import React, { useState, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { CompleteObjective } from '../HelperFunctions';
import './ObjCard.css'

export default function ObjCard(props){

    useEffect(() => {
        if(props.obj.potential && !props.obj.possible)
        setBodyColor({color: "#cccccc"})
    })

    function setBodyColor({color}) {
        document.documentElement.style.setProperty('--bodyColor', color)
    }
    

    function ClickHandler(e){
        CompleteObjective(props.obj)
    }
    
    return(
        <div className="objCard">
            <ListItem disablePadding>
                <ListItemButton onClick={ClickHandler}>
                    <ListItemText primary={props.obj.name} />
                </ListItemButton>
            </ListItem>
        </div>
    )
}

