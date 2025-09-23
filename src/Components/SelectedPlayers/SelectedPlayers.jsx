
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers, removPlayer, setToggle}) => {

    
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCard removPlayer = {removPlayer} player={player}></SelectedCard>)
            }

            <button className="btn py-3 px-5 border-1 border-gray-400 rounded-2xl mt-5" onClick= {() => setToggle(true) } >Add More Players</button>
        </div>
    );
};

export default SelectedPlayers;