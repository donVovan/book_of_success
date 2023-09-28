import React from "react";

function CalendarPr({previousMonth, nextMonth, selectedDate, renderCalendar}) {
    return <div className="calendar">
        <h2 className="calendarTitle">Страница дня {selectedDate.toDateString()}</h2>
        <div className="calendarButtons">
            <button onClick={previousMonth} className="button">&#10232; назад</button>
            <h2 className="dateTitle">{selectedDate.toLocaleString('default', {month: 'long', year: 'numeric'})}</h2>
            <button onClick={nextMonth}  className="button">вперед &#10233;</button>
        </div>
        <div className="days">
            {renderCalendar()}
        </div>
    </div>
}

export default CalendarPr;