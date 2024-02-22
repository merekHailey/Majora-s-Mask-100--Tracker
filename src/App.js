import './App.css';
import React, { useEffect, useState } from 'react';
import Tracker from './Components/Tracker';
import TotalProgressBar from './Components/ProgressBar';
import { Data } from './Data';


function App() {

  const [numCompleted, setNumCompleted] = useState(0)
  const [numPossible, setNumPossible] = useState(0)
  const [numPotential, setNumPotential] = useState(0)

  useEffect(() => UpdateProgress())
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
      setNumPossible(Math.floor((numPossible / Data.length) * 100))
      setNumCompleted(Math.floor((numCompleted / Data.length) * 100))
      setNumPotential(Math.floor((numPotential / Data.length) * 100))
  }


  return (
    <div className='app'>
      <TotalProgressBar numCompleted={numCompleted} numPossible={numPossible} numPotential={numPotential}/>
      <Tracker UpdateProgress={UpdateProgress}/>
      
    </div>
  )
}

export default App;
