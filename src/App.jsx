import './App.css';
import React, { useEffect, useState } from 'react';
import Tracker from './Components/Tracker';
import TotalProgressBar from './Components/ProgressBar';
import { Data, Gamestates } from './Data';
import StateChanger from './Components/StateChanger';
import { CompleteObjective, CycleNum, LoadList, ResetCycle, UpdatePossible, numBottles, setCycleNum, setNumBottles } from './HelperFunctions';
import ObjCard from './Components/ObjCard';
import AlarmBox from './Components/AlarmBox';



function App() {

  const [numCompleted, setNumCompleted] = useState(0)
  const [numPossible, setNumPossible] = useState(0)
  const [numPotential, setNumPotential] = useState(0)


  const [ShownObjCards, setShownObjCards] = useState(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))

  const [CycleNumState, setCycleNumState] = useState(0)

  const [GameStateChecks, setGameStateChecks] = useState(Gamestates)

  const [Alarms, setAlarms] = useState([])
  
  useEffect(() => {
    LoadGame()
  }, [])

  useEffect(() => {
    
    AutoSave()
  },[GameStateChecks, ShownObjCards, Alarms])

  useEffect(() => {
    UpdateProgress()
  })

  

  function LoadGame(){
    setCycleNum(parseInt(localStorage.getItem("CycleNum")))
    setCycleNumState(parseInt(localStorage.getItem("CycleNum")))

  
    setNumBottles(parseInt(localStorage.getItem("numBottles")))
      
    for(let objective of Data){
        let val = localStorage.getItem(objective.name)
        if(val === "T"){
          CompleteObjective(objective)
          UpdateShown()
        }
      }
      
    for(let state of Gamestates){
        if(localStorage.getItem(state.name) === "true"){
          state.isActive = true
        }
        else
        state.isActive = false
    }
    setGameStateChecks(Gamestates)

    

    
    

    for(let state of Gamestates){
      localStorage.setItem(state.name, state.isActive)
    }
  }

  function AutoSave(){
    for(let i = 0; i < Data.length; i++){
      if(Data[i].complete)
        localStorage.setItem(Data[i].name, "T")
      else 
        localStorage.setItem(Data[i].name, "F")
    }

    localStorage.setItem("CycleNum", CycleNum)
    localStorage.setItem("numBottles", numBottles)

    for(let state of Gamestates){
      localStorage.setItem(state.name, state.isActive)
    }
  }

  function UpdateState(stateToAffect, valToUpdate){
    if(stateToAffect === "All"){
      for(let state of Gamestates){
        state.isActive = valToUpdate
      }
    }
    for(let state of Gamestates){
      if(state === stateToAffect)
        state.isActive = valToUpdate
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

  function FullReset(){
    ResetCycle()
    UpdateState("All", false)
    for(let obj of Data){
      obj.complete = false
    }
    setCycleNumState(0)
    UpdatePossible()
    UpdateShown()
  }

  function setNextCycle(){
    setCycleNum(CycleNumState + 1)
    setCycleNumState(CycleNumState + 1)
    UpdatePossible()
    UpdateShown()
  }


  return (
    <div className='app'>
      <TotalProgressBar CycleNumState={CycleNumState} numCompleted={numCompleted} numPossible={numPossible} numPotential={numPotential}/>
      <StateChanger className={"stateChanger"} UpdateState={UpdateState} GameStateChecks={GameStateChecks} setGameStateChecks={setGameStateChecks}/>
      <Tracker setNextCycle={setNextCycle} FullReset={FullReset} CycleNumState={CycleNumState} setCycleNumState={setCycleNumState} UpdateProgress={UpdateProgress} UpdateShown={UpdateShown} setShownObjCards={setShownObjCards} ShownObjCards={ShownObjCards}/>
      <AlarmBox Alarms={Alarms} setAlarms={setAlarms}/>
      
    </div>
  )
}

export default App;
