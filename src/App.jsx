import './App.css';
import React, { useEffect, useState } from 'react';
import Tracker from './Components/Tracker';
import TotalProgressBar from './Components/ProgressBar';
import { Data, Gamestates } from './Data';
import StateChanger from './Components/StateChanger';
import { ChangeCurrentDay, ChangeUndoList, ToggleCompleteObjective, CycleNum, LoadList, ResetCycle, SetObjClass, UndoList, UpdatePossible, currentDay, numBottles, setCycleNum, setNumBottles, allShown, parseBool} from './HelperFunctions';
import ObjCard from './Components/ObjCard';
import AlarmBox from './Components/AlarmBox';
import ObjCardAll from './Components/ObjCardAll';



function App() {

  const [numCompleted, setNumCompleted] = useState(0)
  const [numPossible, setNumPossible] = useState(0)
  const [numPotential, setNumPotential] = useState(0)


  const [ShownObjCards, setShownObjCards] = useState(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))

  const [CycleNumState, setCycleNumState] = useState(0)

  const [CurrentDay, setCurrentDay] = useState("Day 1")

  const [GameStateChecks, setGameStateChecks] = useState(Gamestates)


  const [Alarms, setAlarms] = useState([])

  let saveAlarms = []
  
  useEffect(() => {
    LoadGame()
  }, [])

  useEffect(() => {
    AutoSave()
    
    console.log("Saved")
  },[GameStateChecks, ShownObjCards, Alarms, allShown])

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
          console.log(val)
          ToggleCompleteObjective(objective)
        }
        else if(val === "FP"){
          objective.priority = 0
        }
      }

      if(localStorage.getItem("alarms")){
        let loadingAlarms = JSON.parse(localStorage.getItem("alarms"))
        setAlarms(loadingAlarms)
        saveAlarms = loadingAlarms
      }

      if(localStorage.getItem("undoList")){
        let loadingList = JSON.parse(localStorage.getItem("undoList"))
        ChangeUndoList(loadingList)
      }
      
    for(let state of Gamestates){
        if(localStorage.getItem(state.name) === "true"){
          state.isActive = true
        }
        else
        state.isActive = false
    }
    console.log(localStorage.getItem("allShown"))
    ToggleAll(parseBool(localStorage.getItem("allShown")))
    

    setGameStateChecks(Gamestates)

    UpdateShown()
  }

  function AutoSave(){
    for(let i = 0; i < Data.length; i++){
      if(Data[i].complete){
        localStorage.setItem(Data[i].name, "T")
      }
      else{
        if(Data[i].priority === 0)
          localStorage.setItem(Data[i].name, "FP")
        else
          localStorage.setItem(Data[i].name, "F")
      }
    }

    localStorage.setItem("CycleNum", CycleNum)
    localStorage.setItem("numBottles", numBottles)
    if(Alarms.length !== 0){
      localStorage.setItem("alarms", JSON.stringify(Alarms))
    }
    else if(saveAlarms.length !== 0){
      localStorage.setItem("alarms", JSON.stringify(saveAlarms))
    }
    else if(Alarms.length === 0){
      localStorage.setItem("alarms", JSON.stringify(Alarms))
    }

    localStorage.setItem("undoList", JSON.stringify(UndoList))
    
    console.log(allShown)
    localStorage.setItem("allShown", allShown)

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

  
  function UpdateShown(isAll){
    if(isAll){
      setShownObjCards(LoadList(isAll).map((Obj) => <ObjCardAll ToggleAll={ToggleAll} className={SetObjClass(Obj)} obj={Obj} UpdateShown={UpdateShown}></ObjCardAll>))
    }
    else if (isAll !== undefined){
      setShownObjCards(LoadList(isAll).map((Obj) => <ObjCard ToggleAll={ToggleAll} className={SetObjClass(Obj)} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))
    }
    else{
      setShownObjCards(LoadList(allShown).map((Obj) => <ObjCard ToggleAll={ToggleAll} className={SetObjClass(Obj)} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))
    }

    UpdateProgress()
  }

  function FullReset(){
    ResetCycle()
    UpdateState("All", false)
    for(let obj of Data){
      obj.complete = false
      obj.priority = obj.defaultPriority
    }
    ToggleAll(false)
    setCycleNumState(0)
    UpdatePossible()
    UpdateShown()
    ChangeDay("Day 1")
    setAlarms([])
    for(let item of UndoList){
      item = UndoList.pop()
    }
  }

  function setNextCycle(isUndo){
    if(!isUndo){
      setCycleNum(CycleNumState + 1)
      setCycleNumState(CycleNumState + 1)
      UpdatePossible()
      UpdateShown()
      let undoCycle = {isCycle: true}
      UndoList.push(undoCycle)
    }
    else{
      setCycleNum(CycleNumState - 1)
      setCycleNumState(CycleNumState - 1)
      UpdatePossible()
      UpdateShown()
    }
  }

  function ChangeDay(day){
    setCurrentDay(day)
    ChangeCurrentDay(day)
    UpdateShown()
  }

     
  function Undo(){
    
    if(UndoList.length > 0){
      let undoObj = UndoList.pop()
      if(undoObj.name){
        ToggleCompleteObjective(undoObj, true)
      }
    
      else if(undoObj.label){
      let newAlarms = Alarms
      newAlarms.push(undoObj)
      setAlarms(newAlarms)
      }
      else if(undoObj.isCycle){
        setNextCycle(true)
      }
      else{
        console.log("Unhandled:")
        console.log(undoObj)
      }
    }
    UpdateShown()
  }

  function ToggleAll(allShown){    
    UpdateShown(allShown)
  }


  return (
    <div className='app'>
      <span className='cycle'>Cycle Number: {CycleNumState}</span> <span className='total'>Total Progress</span><span className='day'>Time of Day: {CurrentDay}</span>
      <TotalProgressBar CurrentDay={CurrentDay} CycleNumState={CycleNumState} numCompleted={numCompleted} numPossible={numPossible} numPotential={numPotential}/>
      <StateChanger className={"stateChanger"} UpdateState={UpdateState} GameStateChecks={GameStateChecks} setGameStateChecks={setGameStateChecks}/>
      <Tracker ToggleAll={ToggleAll} Undo={Undo} ChangeDay={ChangeDay} CurrentDay={CurrentDay} setNextCycle={setNextCycle} FullReset={FullReset} CycleNumState={CycleNumState} setCycleNumState={setCycleNumState} UpdateProgress={UpdateProgress} UpdateShown={UpdateShown} setShownObjCards={setShownObjCards} ShownObjCards={ShownObjCards}/>
      <AlarmBox UpdateShown={UpdateShown} CurrentDay={CurrentDay} Alarms={Alarms} setAlarms={setAlarms}/>
      
    </div>
  )
}

export default App;
