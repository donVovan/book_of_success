import React from "react";

function CalendarPr({previousMonth, nextMonth, selectedDate, renderCalendar}) {
    return <div className="calendar">
        <h2 className="calendarTitle">Страница дня {selectedDate.toDateString()}</h2>
        <div>
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