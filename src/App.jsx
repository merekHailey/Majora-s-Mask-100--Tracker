import './App.css';
import React, { useEffect, useState } from 'react';
import Tracker from './Components/Tracker';
import TotalProgressBar from './Components/ProgressBar';
import { Data, Gamestates } from './Data';
import StateChanger from './Components/StateChanger';
import { CycleNum, LoadList, numBottles } from './HelperFunctions';
import ObjCard from './Components/ObjCard';



function App() {

  const [numCompleted, setNumCompleted] = useState(0)
  const [numPossible, setNumPossible] = useState(0)
  const [numPotential, setNumPotential] = useState(0)

  const [ShownObjCards, setShownObjCards] = useState(LoadList().map((Obj) => <ObjCard className={!Obj.possible && Obj.potential ? "potential" : "possible"} obj={Obj} UpdateShown={UpdateShown}></ObjCard>))


  const [GameStateChecks, setGameStateChecks] = useState(Gamestates)
  
  useEffect(() => {
    LoadGame()
  }, [])

  useEffect(() => {
    AutoSave()
  },[Data, Gamestates, CycleNum, numBottles])
  useEffect(() => {
    UpdateProgress()
  })

  

  function LoadGame(){
    //localStorage.getItem()
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


  return (
    <div className='app'>
      <TotalProgressBar numCompleted={numCompleted} numPossible={numPossible} numPotential={numPotential}/>
      <StateChanger className={"stateChanger"} UpdateState={UpdateState} GameStateChecks={GameStateChecks} setGameStateChecks={setGameStateChecks}/>
      <Tracker UpdateProgress={UpdateProgress} UpdateShown={UpdateShown} setShownObjCards={setShownObjCards} ShownObjCards={ShownObjCards}/>
      
    </div>
  )
}

export default App;
