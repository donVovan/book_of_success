import React from "react";

function CalendarPr({previousMonth, nextMonth, selectedDate, renderCalendar}) {
    return <div className="calendar">
        <div className="selectMonth">
            <button onClick={previousMonth}>&#129152; назад</button>
            <h2>{selectedDate.toLocaleString('default', {month: 'long', year: 'numeric'})}</h2>
            <button onClick={nextMonth}>вперед &#129154;</button>
        </div>
        <div className="days">
            {renderCalendar()}
        </div>
    </div>
}

export default CalendarPr;