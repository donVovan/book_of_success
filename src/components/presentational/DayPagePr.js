import React from "react";

function DayPagePr({entries, handleDeleteEntry, handleEditEntry}) {
    return <div>
        <ul className="entry-list">
            {entries.map((entry, index) => (
                <li className="entry-item" key={index}>
                    <p>{entry.text}</p>
                    <button onClick={() => handleDeleteEntry(index)}>Удалить</button>
                    <button onClick={() => handleEditEntry(index)}>Редактировать</button>
                </li>
            ))}
        </ul>
    </div>
}

export default DayPagePr;