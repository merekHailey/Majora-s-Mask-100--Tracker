import './App.css';
import React from 'react';
import Tracker from './Components/Tracker';


function App() {

//Migrate Data to state??
//const [ObjectsData, setObjectsData] = useState(Data)




  return (
    <div className='app'>
      <Tracker className={"tracker"}/>
      
    </div>
  )
}

export default App;
