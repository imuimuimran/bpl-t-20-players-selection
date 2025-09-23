// import React, { useState } from 'react';
import imgIcon from '../../assets/img-icon.png'
import flagIcon from '../../assets/flag-icon.png'
import { toast } from 'react-toastify';

const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {

    // check if this player already selected
    const isSelected = purchasedPlayers.some(
        (p) => p.playerName === player.playerName
    // const [isSelected, setIsSelected] = useState(false)
    );
    
    const handleSelected = (playerData) => {
        if(availableBalance < playerData.playerPrice){
            toast("Not enough coin")
            return
        }
        if(purchasedPlayers.length === 6) {
            toast("Highest Player Buying Limit is 6.")
            return
        } 

        // if already selected, do nothing
        if (isSelected) return;
        // setIsSelected(true) 

        setAvailableBalance(availableBalance - playerData.playerPrice);

        setPurchasedPlayers([...purchasedPlayers, playerData])
    }

    return (
        <div className="card bg-base-100 shadow-sm p-4">
                <figure>
                    <img
                    src= {player.playerImage} alt='player Image' className='w-full h-[300px] object-cover'/>
                </figure>
                <div className="mt-4">
                    <div className='flex items-center'>
                        <img className='w-[20px] h-[20px] mr-2' src= {imgIcon} /><h2 className="card-title">{player.playerName}</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 border-gray-400 pb-2'>
                        <div className='flex items-center'>
                            <img className='w-[20px] h-[20px] mr-2' src={flagIcon} /><span>{player.playerCountry}</span>
                        </div>
                        <button className='btn'>{player.playerRole}</button>
                    </div>

                    <div className='flex justify-between font-bold mt-2'>
                        <span>Rating: </span>
                        <span>{player.playerRating}</span>
                    </div>

                    <div className='flex justify-between mt-4'>
                        <span className='font-bold'>{player.batingStyle}</span>
                        <span>{player.bowlingStyle}</span>
                    </div>
                    
                    <div className="card-actions flex items-center justify-between mt-4">
                        <p className='font-bold'>Price: ${player.playerPrice} USD</p>
                        <button disabled= {isSelected} onClick={() => {
                            handleSelected(player)
                            }} className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
    );
};

export default PlayerCard;