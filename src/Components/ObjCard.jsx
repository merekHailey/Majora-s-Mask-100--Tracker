import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { CompleteObjective } from '../HelperFunctions';
import './ObjCard.css'

export default function ObjCard(props){   

    function ClickHandler(e){
        CompleteObjective(props.obj)
        props.UpdateShown()
    }
    
    return(
        <div className={props.className}>
            <ListItem disablePadding>
                <ListItemButton onClick={ClickHandler}>
                    <ListItemText primary={props.obj.name} />
                </ListItemButton>
            </ListItem>
        </div>
    )
}

