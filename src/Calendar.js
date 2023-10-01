import React from "react";
import "./Calendar.css";
import CalendarPr from "./CalendarPr";

function Calendar({renderList, renderAddElement, previousMonth, nextMonth, renderCalendar, selectedDate}) {
    return <div>
        <CalendarPr
            previousMonth={previousMonth}
            nextMonth={nextMonth}
            selectedDate={selectedDate}
            renderCalendar={renderCalendar}
            renderAddElement={renderAddElement}
            renderList={renderList}
        />
    </div>
}

export default Calendar;