import { Suspense } from 'react';
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import NavBar from './Components/NavBar/NavBar';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async() => {
  const res = await fetch("/players-info.json")
  return res.json()
}

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      
      <NavBar></NavBar>

      <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playersPromise = {playersPromise}></AvailablePlayers>
      </Suspense>

      <SelectedPlayers></SelectedPlayers>
      
    </>
  )
}

export default App
