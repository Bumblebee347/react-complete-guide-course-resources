import {useState, useEffect, useRef} from "react";

export default function Player({ name: initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);
    const inputRef = useRef(null);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className='player-name'>{name}</span>;
    if (isEditing) {
        playerName = <input ref={inputRef} type="text" value={name} onChange={handleChange} required/>
    }

    function handleChange(event){
        setName(event.target.value);
    }

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

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