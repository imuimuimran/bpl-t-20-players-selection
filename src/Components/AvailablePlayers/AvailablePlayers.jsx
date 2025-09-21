import React, { use } from 'react';
import imgIcon from '../../assets/img-icon.png'
import flagIcon from '../../assets/flag-icon.png'

const AvailablePlayers = ({playersPromise}) => {
    const playersData = use(playersPromise);
    console.log(playersData);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        {
            playersData.map(player => <div className="card bg-base-100 shadow-sm p-4">
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
                        <p className='font-bold'>Price: ${player.playerPrice}</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>)
        }

        </div>
    );
};

export default AvailablePlayers;