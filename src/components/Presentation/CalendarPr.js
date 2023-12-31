import React from "react";

function CalendarPr({previousMonth, nextMonth, selectedDate, renderCalendar, renderList, renderAddElement}) {
    return <div className="calendar">
        <div className="selectMonth">
            <button onClick={previousMonth} className="button">&#129152; назад</button>
            <h2>{selectedDate.toLocaleString('default', {month: 'long', year: 'numeric'})}</h2>
            <button onClick={nextMonth} className="button">вперед &#129154;</button>
        </div>
        <div className="days">
            {renderCalendar()}
            {renderAddElement()}

        </div>{renderList()}
    </div>
}

export default CalendarPr;