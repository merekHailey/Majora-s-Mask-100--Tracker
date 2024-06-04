import React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AlarmDayDialog from './AlarmDayDialog';
import AlarmTimeDialog from './AlarmTimeDialog';
import AlarmLabelDialog from './AlarmLabelDialog';
import Alarm from './Alarm';
import './AlarmBox.css'
import { isCorrectTime } from '../HelperFunctions'



export default function AlarmBox(props) {

  const [openDay, setOpenDay] = useState(false);
  const [valueDay, setValueDay] = useState('Day 1');

  const [openTime, setOpenTime] = useState(false);
  const [valueTime, setValueTime] = useState("")

  const [openLabel, setOpenLabel] = useState(false);
  const [valueLabel, setValueLabel] = useState("")



  const handleClickOpenTime = () => {
    setOpenTime(true);
  };

  const handleCloseTime = (newValue) => {
    setOpenTime(false);

    if(!newValue.target){
      console.log(newValue)
      handleClickOpenLabel()
    }
  };

  const handleClickOpenLabel = () => {
    setOpenLabel(true);
  };

  const handleCloseLabel = (newValue) => {
    setOpenLabel(false);

    if(!newValue.target){
      let alarm = {label: newValue, day: valueDay, time: valueTime}
      let tempAlarms = props.Alarms
      tempAlarms.push(alarm)
      props.setAlarms(tempAlarms)
      props.UpdateShown()
    }
  };

    function HandleClickDay(e){
      setOpenDay(true)
  }

  const handleCloseDay = (newValue) => {
    setOpenDay(false);

    if (newValue) {
      setValueDay(newValue);
      handleClickOpenTime()
    }
  };

  function BuildAlarms() {
    let Alarms = []
    for(let alarm of props.Alarms){
      if(isCorrectTime(alarm.day)){
        Alarms.push(<Alarm RemoveAlarm={RemoveAlarm} alarms={Alarms} id={alarm.label} alarm={alarm}/>)
      }
    }
    return Alarms
  }

  function RemoveAlarm(alarm){
    let tempAlarms = [...props.Alarms]
        for(let tempAlarm of tempAlarms){
            if(tempAlarm.label === alarm.label){
                
                let i = tempAlarms.indexOf(tempAlarm)
                tempAlarms.splice(i, 1)
                props.setAlarms(tempAlarms)
            }
        }
  }

  return (
    <Box className={"AlarmBox"}>
      <div className='Alarms'>
        {BuildAlarms()}
      </div>
        <Button className={"setAlarmBtn"} variant="outlined" onClick={HandleClickDay}>New Alarm</Button>
        <AlarmDayDialog
            id="Day-Selector"
            keepMounted
            open={openDay}
            onClose={handleCloseDay}
            value={valueDay}
          />
          <AlarmTimeDialog 
          open={openTime} 
          onClose={handleCloseTime}
          setValueTime={setValueTime}
          />

        <AlarmLabelDialog
          open={openLabel} 
          onClose={handleCloseLabel}
          setValueTime={setValueLabel}
          />
        
    </Box>
  );
}