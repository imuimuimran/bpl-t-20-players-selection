import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import NavBar from './Components/NavBar/NavBar';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async() => {
  const res = await fetch("/players-info.json")
  return res.json()
}

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(35000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  return (
    <>
      
      <NavBar availableBalance = {availableBalance}></NavBar>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>{
            toggle === true ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`
          }</h2>
        <div className='font-bold'>
          <button onClick={ () => setToggle(true) } className={`btn py-3 px-5 border-1 border-r-0 border-gray-400 rounded-l-2xl ${toggle === true ? "bg-[#E7EF29]" : ""}`}>Available</button>
          <button onClick={ () => setToggle(false) } className={`btn py-3 px-2 border-1 border-l-0 border-gray-400 rounded-r-2xl ${toggle === false ? "bg-[#E7EF29]" : ""}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers purchasedPlayers = {purchasedPlayers} setPurchasedPlayers = {setPurchasedPlayers} playersPromise = {playersPromise} setAvailableBalance = {setAvailableBalance} availableBalance = {availableBalance}></AvailablePlayers>
        </Suspense> : <SelectedPlayers purchasedPlayers = {purchasedPlayers}></SelectedPlayers>
      }
      
    </>
  )
}

export default App
