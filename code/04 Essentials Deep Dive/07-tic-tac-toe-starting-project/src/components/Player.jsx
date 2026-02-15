import {useState} from "react";

export default function Player({ name: initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);
    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className='player-name'>{name}</span>;
    if (isEditing) {
        playerName = <input type="text" value={name} onChange={handleChange} required/>
    }

    function handleChange(event){
        setName(event.target.value);
    }

    return (
        <li>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={() => handleEditClick()}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}