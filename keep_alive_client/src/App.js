
import './App.css';
import React from 'react';
import { useState , useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const App = () => {
  const [armoryID , setArmoryID] = useState("")
  const [sendingToServer , setSendingToServer] = useState(false)
  useEffect(() => {
    if(sendingToServer === true){
    setInterval(() => {
      fetch(`http://localhost:8000/armory/sendPing/${armoryID}`).then(res => res.json()).then(console.log).catch(console.error)
      }, 3600)
    }
  },[sendingToServer])
  return (
    <div style={{display: "flex", margin: "auto"}}>
      <TextField disabled={sendingToServer} onChange={(e) => setArmoryID(e.target.value)} value={armoryID} id="outlined-basic" label="ArmoryID " variant="outlined" />
      <Button disabled={sendingToServer} onClick={() => setSendingToServer(true)} variant="contained" color="primary" href="#contained-buttons">
        Sync
      </Button>
    </div>
  )
}

export default App;
