import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {Data} from '../Data';
import ObjCard from './ObjCard';
import { UpdatePossible } from '../HelperFunctions';
export default function Tracker(props){
    
    useEffect(() => {
        LoadList()
    })
    const [ShownObjCards, setShownObjCards] = useState([])
    var ShownList = []
    function LoadList(options){
        UpdatePossible()
        for(let i = 0; i < Data.length; i++){
            if(Data[i].possible || Data[i].potential){
                ShownList.push(Data[i])
            }
        }
        setShownObjCards(ShownList.map((Obj) => <ObjCard obj={Obj} LoadList={LoadList}></ObjCard>))
    }

    return(
        <div className="tracker">
            <Box sx={{ width: '100%'/*, maxWidth: 360*/, bgcolor: 'background.paper' }}>
            <nav aria-label="ObjCards"></nav> 
                <List>{ShownObjCards}</List>     
                
                
            </Box>
        </div>
    )
}