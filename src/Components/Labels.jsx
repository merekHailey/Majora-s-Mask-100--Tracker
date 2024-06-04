import React from 'react';
import './Labels.css'
import { allShown } from '../HelperFunctions';

export default function Labels(){ 
    
    function getLabels(){
        if(allShown){
            return <><span className={'spot1'}>Objective</span> <span className={"spot2"}>Item Recs</span><span className={"spot3"}>Game State</span><span className={"spot4"}>Priority</span></>
        }
        else{
            return <><span className={'spot1'}>Objective</span> <span className={"spot2"}>Game State</span><span className={"spot3"}>Estimated Time</span><span className={"spot4"}>Priority</span></>

        }
    }

    return(
        <div className={"labels"}>
            {getLabels()}
        </div>
    )
}

