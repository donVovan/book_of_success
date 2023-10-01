import React from "react";
import "./Calendar.css";
import CalendarPr from "./CalendarPr";

function Calendar({renderAddElement,  renderList, previousMonth, nextMonth, renderCalendar, selectedDate}) {
    return <div>
        <CalendarPr
            renderAddElement={renderAddElement}
            renderList={renderList}
            previousMonth={previousMonth}
            nextMonth={nextMonth}
            renderCalendar={renderCalendar}
            selectedDate={selectedDate}
        />
    </div>
}

export default Calendar;