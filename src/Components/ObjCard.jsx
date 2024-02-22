import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { CompleteObjective, Day, Time } from '../HelperFunctions';
import './ObjCard.css'

export default function ObjCard(props){   

    function ClickHandler(e){
        CompleteObjective(props.obj)
        props.UpdateShown()
    }

    function ItemsText(){
        if(props.obj.itemRecs !== null){
            let itemText = ""
            for(let i = 0; i < props.obj.itemRecs.length; ++i){
                if(i === 0)
                    itemText = props.obj.itemRecs[i].name
                else
                    itemText += " / " + props.obj.itemRecs[i].name
            }
            return itemText
        }
    }

    function StateText(){
        if(props.obj.gameState !== null){
            let stateText = ""
            for(let i = 0; i < props.obj.gameState.length; ++i){
                if(i === 0)
                    stateText = props.obj.gameState[i].name
                else
                    stateText += " / " + props.obj.gameState[i].name
            }
            return stateText
        }
    }

    function PriorityText(){
            return "Priority: " + props.obj.priority
    }

    function Spot1Text(){

        if(props.timeRec !== null){
            if(typeof props.timeRec === Time)
            return "Time: " + props.obj.timeRec.startTime + " - " + props.obj.timeRec.endTime
            else if(typeof props.timeRec === Day){
                return "Day: " + props.timeRec.day
            }
        }
        else if(props.obj.bottles !== 0){
            let bottleText = ""
                bottleText = ("Bottles: " + props.obj.bottles)
            
            return bottleText
        }
        else if(props.obj.cost !== 0){
            let costText = ""
                costText = ("Cost: " + props.obj.cost + " Rupees")
            return costText
        }
        else return ""
    }

    

    function Spot2Text(){

        if(props.obj.bottles !== 0 && props.timeRec !== null){
            let bottleText = ""
                bottleText = ("Bottles: " + props.obj.bottles)
            
            return bottleText
        }
        else if(props.obj.cost !== 0){
            let costText = ""
                costText = ("Cost: " + props.obj.cost + " Rupees")
            return costText
        }
        else return ""
    }

    function CycleNumText(){

        return "Cycle: " + props.obj.cycleNum
    }

    function NotesText(){
        return props.obj.notes
    }
    
    return(
        <div>
            <ListItem disablePadding>
                <ListItemButton onClick={ClickHandler}>
                    <div className={props.className}>
                        <div className='row1'>
                            <span className='name'>{props.obj.name}</span> <span className={"items"}>{ItemsText()}</span> <span className={"state"}>{StateText()}</span> <span className={"priority"}>{PriorityText()}</span>
                        </div>
                        <div className='row2'>
                            <span className='spot1'>{Spot1Text()}</span> <span className='spot2'>{Spot2Text()}</span> <span className='cycle'>{CycleNumText()}</span> <span className='notes'>{NotesText()}</span>
                        </div>
                    </div>
                </ListItemButton>
            </ListItem>
        </div>
    )
}

