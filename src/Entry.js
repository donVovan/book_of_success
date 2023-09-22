import React from "react";

function Entry({text, onDelete, onEdit}) {
    return (
        <li className="entry-item">
            <p>{text}</p>
            <button onClick={onDelete}>Удалить</button>
            <button onClick={onEdit}>Редактировать</button>
        </li>
    );
}

export default Entry;