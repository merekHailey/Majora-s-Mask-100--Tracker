import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CurrentDayDialog from './CurrentDayDialog';

export default function CurrentDayBtn(props) {

    const [openDay, setOpenDay] = useState(false);
    const [valueDay, setValueDay] = useState('Day 1');

    function HandleClick(e){
        setOpenDay(true)
    }

    const handleCloseDay = (newValue) => {
        setOpenDay(false);
    
        if (newValue) {
          setValueDay(newValue);
          props.ChangeDay(newValue)
        }
      };

  return (
    <div>
      <Button className={"currentDayBtn"} variant="outlined" onClick={HandleClick}>Change Current Day</Button>
      <CurrentDayDialog
            id="Day-Selector"
            keepMounted
            open={openDay}
            onClose={handleCloseDay}
            value={valueDay}
          />
    </div>
  );
}