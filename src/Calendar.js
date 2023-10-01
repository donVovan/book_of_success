import React from "react";
import "./Calendar.css";
import CalendarPr from "./CalendarPr";

function Calendar({entries, handleShowEntries, renderList, renderAddElement, previousMonth, nextMonth, renderCalendar, selectedDate, setSelectedDate}) {
    // const [selectedDate, setSelectedDate] = useState(new Date());

 /*   function handleChange(date) {
        setSelectedDate(date);
        onChange(date);
    }*/





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