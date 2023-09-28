import React from "react";

function DayPagePr({entries, handleDeleteEntry, handleEditEntry}) {
    return <div>
        <ul className="entry-list">
            {entries.map((entry, index) => (
                <li className="entry-item" key={index}>
                    <p>{entry.text}</p>
                    <button onClick={() => handleDeleteEntry(index)} className="button">Удалить</button>
                    <button onClick={() => handleEditEntry(index)} className="button">Редактировать</button>
                </li>
            ))}
        </ul>
    </div>
}

export default DayPagePr;