import './App.css';
import React, { useEffect, useState } from 'react';
import Tracker from './Components/Tracker';
import TotalProgressBar from './Components/ProgressBar';
import { BoatAccess, Data } from './Data';
import StateChanger from './Components/StateChanger';
import { LoadList } from './HelperFunctions';
import ObjCard from './Components/ObjCard';


function App() {

  const [numCompleted, setNumCompleted] = useState(0)
  const [numPossible, setNumPossible] = useState(0)
  const [numPotential, setNumPotential] = useState(0)

  const [ShownObjCards, setShownObjCards] = useState(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))


  const [boatAccessChecked, setBoatAccessChecked] = useState(false)

  useEffect(() => {

    UpdateProgress()
  })

  function UpdateState(valToUpdate){
    BoatAccess.isActive = valToUpdate
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
