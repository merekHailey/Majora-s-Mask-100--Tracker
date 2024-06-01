import './App.css';
import React, { useEffect, useState } from 'react';
import Tracker from './Components/Tracker';
import TotalProgressBar from './Components/ProgressBar';
import { AnjuMeeting, BoatAccess, Data, DeedQuestStarted, GrandmaSaved, IkanaCleansed, KafeiTrust, LetterDelivered, OceanCleared, OperationSolMates, PendantDelivered, PriorityMailRecieved, RomaniFriended, RomaniStoneRemoved, ScarecrowSong, SpringTime, SwampCleared } from './Data';
import StateChanger from './Components/StateChanger';
import { LoadList } from './HelperFunctions';
import ObjCard from './Components/ObjCard';
const fs = require('fs');


function App() {

  const [numCompleted, setNumCompleted] = useState(0)
  const [numPossible, setNumPossible] = useState(0)
  const [numPotential, setNumPotential] = useState(0)

  const [ShownObjCards, setShownObjCards] = useState(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))


  const [boatAccessChecked, setBoatAccessChecked] = useState(false)
  const [grandmaSavedChecked, setGrandmaSavedChecked] = useState(false)
  const [romaniFriendedChecked, setRomaniFriendedChecked] = useState(false)
  const [swampClearedChecked, setSwampClearedChecked] = useState(false)
  const [springTimeChecked, setSpringTimeChecked] = useState(false)
  const [oceanClearedChecked, setOceanClearedChecked] = useState(false)
  const [ikanaCleansedChecked, setIkanaCleansedChecked] = useState(false)
  const [deedQuestStartedChecked, setDeedQuestStartedChecked] = useState(false)
  const [scarecrowSongChecked, setScarecrowSongChecked] = useState(false)
  const [anjuMeetingChecked, setAnjuMeetingChecked] = useState(false)
  //const [letterDeliveredChecked, setLetterDeliveredChecked] = useState(false)
  const [kafeiTrustChecked, setKafeiTrustChecked] = useState(false)
  const [priorityMailRecievedChecked, setPriorityMailRecievedChecked] = useState(false)
  const [pendantDeliveredChecked, setPendantDeliveredChecked] = useState(false)
  const [operationSolMatesChecked, setOperationSolMatesChecked] = useState(false)

  useEffect(() => {
    UpdateProgress()
  })

  useEffect(() => {
    LoadGame()
  }, [])

  function LoadGame(){
    let data = fs.readFileSync('books.json');
    let books = JSON.parse(data);
  }

  function UpdateState(state, valToUpdate){
    if(state === "Boat Access"){
      BoatAccess.isActive = valToUpdate
    }
    else if(state === "Grandma Saved"){
      GrandmaSaved.isActive = valToUpdate
    }
    else if(state === "Romani Friended"){
      RomaniFriended.isActive = valToUpdate
    }
    else if(state === "Swamp Cleared"){
      SwampCleared.isActive = valToUpdate
    }
    else if(state === "Spring Time"){
      SpringTime.isActive = valToUpdate
    }
    else if(state === "Ocean Cleared"){
      OceanCleared.isActive = valToUpdate
    }
    else if(state === "Ikana Cleansed"){
      IkanaCleansed.isActive = valToUpdate
    }
    else if(state === "Deed Quest Started"){
      DeedQuestStarted.isActive = valToUpdate
    }
    else if(state === "Romani Stone Removed"){
      RomaniStoneRemoved.isActive = valToUpdate
    }
    else if(state === "Scarecrow Song"){
      ScarecrowSong.isActive = valToUpdate
    }
    else if(state === "Anju Meeting"){
      AnjuMeeting.isActive = valToUpdate
    }
    // else if(state === "Letter Delivered"){
    //   LetterDelivered.isActive = valToUpdate
    // }
    else if(state === "Kafei Trust"){
      KafeiTrust.isActive = valToUpdate
    }
    else if(state === "Priority Mail Recieved"){
      PriorityMailRecieved.isActive = valToUpdate
    }
    else if(state === "Pendant Delivered"){
      PendantDelivered.isActive = valToUpdate
    }
    else if(state === "Operation Sol Mates"){
      OperationSolMates.isActive = valToUpdate
    }
    else if(state === "All"){
      BoatAccess.isActive = valToUpdate
      GrandmaSaved.isActive = valToUpdate
      RomaniFriended.isActive = valToUpdate
      SwampCleared.isActive = valToUpdate
      SpringTime.isActive = valToUpdate
      OceanCleared.isActive = valToUpdate
      IkanaCleansed.isActive = valToUpdate
      DeedQuestStarted.isActive = valToUpdate
      RomaniStoneRemoved.isActive = valToUpdate
      ScarecrowSong.isActive = valToUpdate
      AnjuMeeting.isActive = valToUpdate
      LetterDelivered.isActive = valToUpdate
      KafeiTrust.isActive = valToUpdate
      PriorityMailRecieved.isActive = valToUpdate
      PendantDelivered.isActive = valToUpdate
      OperationSolMates.isActive = valToUpdate
    }
    
    UpdateShown()
  }

  function UpdateProgress(){


      let numCompleted = 0
      let numPossible = 0
      let numPotential = 0
      for(let i = 0; i < Data.length; ++i){
          if(Data[i].complete){
              numCompleted++
          }
          else if(!Data[i].complete && Data[i].possible){
              numPossible++
          }
          else if(!Data[i].complete && Data[i].potential && !Data[i].possible){
              numPotential++
          }
      }
      setNumPossible((numPossible / Data.length) * 100)
      setNumCompleted((numCompleted / Data.length) * 100)
      setNumPotential((numPotential / Data.length) * 100)
  }

  
  function UpdateShown(){
    setShownObjCards(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))
    UpdateProgress()
  }


  return (
    <div className='app'>
      <TotalProgressBar numCompleted={numCompleted} numPossible={numPossible} numPotential={numPotential}/>
      <StateChanger className={"stateChanger"} UpdateState={UpdateState} boatAccessChecked={boatAccessChecked} setBoatAccessChecked={setBoatAccessChecked}/>
      <Tracker UpdateProgress={UpdateProgress} UpdateShown={UpdateShown} setShownObjCards={setShownObjCards} ShownObjCards={ShownObjCards}/>
      
    </div>
  )
}

export default App;
