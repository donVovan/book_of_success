import React from "react";

function CalendarPr({previousMonth, nextMonth, selectedDate, renderCalendar}) {
    return <div className="calendar">
        <h2>Страница дня {selectedDate.toDateString()}</h2>
        <div className="header">
            <button onClick={previousMonth}>Предыдущий месяц</button>
            <h2>{selectedDate.toLocaleString('default', {month: 'long', year: 'numeric'})}</h2>
            <button onClick={nextMonth}>Следующий месяц</button>
        </div>
        <div className="days">
            {renderCalendar()}
        </div>
    </div>
}

export default CalendarPr;