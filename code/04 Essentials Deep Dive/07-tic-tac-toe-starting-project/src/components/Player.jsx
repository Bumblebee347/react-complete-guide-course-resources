import {useState, useEffect, useRef} from "react";

export default function Player({ name: initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);
    const inputRef = useRef(null);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setIsEditing(false);
        }
    }

    function handleChange(event){
        setName(event.target.value);
    }

    let playerName = <span className='player-name'>{name}</span>;
    if (isEditing) {
        playerName = <input ref={inputRef} type="text" value={name} onChange={handleChange} onKeyDown={handleKeyDown} required/>
    }

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    return (
        <li className={ isActive ? "active" : undefined }>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={() => handleEditClick()}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}