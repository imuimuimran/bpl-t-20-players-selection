import React from 'react';

const SelectedCard = ({player}) => {
    
    return (
        <div className='flex justify-between items-center mt-4 px-5 border-2 border-gray-300 p-3 rounded-2xl'>
            <div className='flex items-center'>
                <img className='w-[60px] h-[50px] rounded-lg' src={player.playerImage} alt='Player Image'></img>
                <div className='ml-4'>
                    <h2 className='text-lg font-bold'>{player.playerName}</h2>
                    <p className='text-xs text-gray-200'>{player.playerRole}</p>
                </div>
            </div>
            <div>
                <img className='w-[20px] h-[20px]' src="https://i.ibb.co.com/20vPswws/delete.png" alt='Delete Image'></img>
            </div>
        </div>
    );
};

export default SelectedCard;