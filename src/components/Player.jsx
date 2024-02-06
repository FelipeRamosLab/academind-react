import { useState } from 'react';

export default function Player({ name, symbol, isActive }) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(name); 

    function handleEditClick() {
        setIsEditing(prev => !prev);
    }

    function handleChange(ev) {
        setPlayerName(ev.target.value)
    }

    let playerNameElt = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        playerNameElt = <input required value={playerName} onChange={handleChange} />;
        btnCaption = 'Save';
    }

    return (<li className={isActive ? 'active' : undefined }>
        <span className="player">
            {playerNameElt}
            <span className="player-symbol">{symbol}</span>
        </span>

        <button onClick={handleEditClick}>{btnCaption}</button>
    </li>);
}
