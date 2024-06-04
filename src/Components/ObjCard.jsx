import React from 'react';
import { CompleteObjective, FindObjIndex } from '../HelperFunctions';
import { Data } from '../Data';
import './ObjCard.css'
import pin from '../Images/pin-icon.webp'
import { useState } from 'react';
import { useEffect } from 'react';

export default function ObjCard(props){  

    const [isPinned, setIsPinned] = useState(false)

    useEffect(() => {
        if(props.obj.priority === 0){
            setIsPinned(true)
        }
        else
            setIsPinned(false)
    })
    useEffect(() => {
        props.UpdateShown()


    }, [isPinned])

    function ClickHandler(e){
        CompleteObjective(props.obj)
        props.UpdateShown()
    }

    function ItemsText(){
        if(props.obj.itemRecs !== null){
            let itemText = ""
            for(let i = 0; i < props.obj.itemRecs.length; ++i){
                if(i === 0)
                    itemText = props.obj.itemRecs[i]
                else
                    itemText += " / " + props.obj.itemRecs[i]
            }
            return itemText
        }
        else return "None"
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
        else return "None"
    }

    function PriorityText(){
            return "Priority: " + props.obj.defaultPriority
    }

    function Spot1Text(){

        if(props.timeRec !== null){
            // if(typeof props.timeRec === Time)
            // return "Time: " + props.obj.timeRec.startTime + " - " + props.obj.timeRec.endTime
            // else if(typeof props.timeRec === Day){
            //     return "Day: " + props.timeRec.day
            // }
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

    function ClickHandlerPin(){
        if(Data[FindObjIndex(props.obj.name)].priority !== 0){
            Data[FindObjIndex(props.obj.name)].priority = 0
            setIsPinned(true)
        }
        else {
            Data[FindObjIndex(props.obj.name)].priority = Data[FindObjIndex(props.obj.name)].defaultPriority
            setIsPinned(false)
        }
        
        
    }
    
    return(
        <div id={props.obj.id} className={props.className}>
            <button onClick={ClickHandler} className='button'>
                    <div className='row1'>
                        <span className='name'>{props.obj.name}</span> <span className={"items"}>{ItemsText()}</span> <span className={"state"}>{StateText()}</span> <span className={"priority"}>{PriorityText()}</span>
                    </div>
                    <div className='row2'>
                        <span className='spot1'>{Spot1Text()}</span> <span className='spot2'>{Spot2Text()}</span> <span className='cycle'>{CycleNumText()}</span> <span className='notes'>{NotesText()}</span>
                    </div>
            </button>    
            <button onClick={ClickHandlerPin} className={isPinned ? "pinned" : "pin"}>
                <img id={props.obj.name + "Img"} className={"pinImg"} src={pin} alt="Pin"/> 
            </button>
        </div>
    )
}

