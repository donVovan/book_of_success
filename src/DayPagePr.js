import React from "react";

function DayPagePr({entries, handleDeleteEntry, handleEditEntry}) {
    return <ul className="entry-list">
        {entries.map((entry, index) => (
            <li className="entry-item" key={index}>
                <p>{entry.text}</p>
                <button onClick={()=> handleDeleteEntry(index)}>Удалить</button>
                <button onClick={()=> handleEditEntry(index)}>Редактировать</button>
            </li>
        ))}
    </ul>
}

export default DayPagePr;