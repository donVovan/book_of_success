import React from "react";

function Day({date, istoDay, onClick}) {
    return (
        <div
            className={`day ${istoDay ? 'today' : ''}`}
            onClick={()=> onClick(date)}
        >
            {date.getDate()}
        </div>
    );
}

export default Day;