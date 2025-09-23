import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers, removPlayer}) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCard removPlayer = {removPlayer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;