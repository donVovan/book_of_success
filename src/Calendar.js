import React, {useState} from "react";
import "./Calendar.css";
import CalendarPr from "./CalendarPr";

function Calendar({entries, handleShowEntries, handleDateChange, renderList}) {
    const [selectedDate, setSelectedDate] = useState(new Date());

 /*   function handleChange(date) {
        setSelectedDate(date);
        onChange(date);
    }*/

    function previousMonth() {
        const currentDate = new Date(selectedDate);
        currentDate.setMonth(currentDate.getMonth()-1);
        setSelectedDate(currentDate);
    }

    function nextMonth() {
        const currentDate = new Date(selectedDate);
        currentDate.setMonth(currentDate.getMonth()+1);
        setSelectedDate(currentDate);
    }

    function renderCalendar() {

        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();

        const firstDay = new Date(year, month, 0).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        const days = [];
        let dayCounter = 1;

        days.push(
            <tr>
                <th>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th>Вс</th>
            </tr>
        );

        for (let week = 0; week < 6; week++) {
            let weekDays = [];

            for (let day = 0; day < 7; day++) {
                if ((week === 0 && day < firstDay) || dayCounter > lastDate) {
                    weekDays.push(<td></td>);
                } else {
                    const currentDate = new Date(year, month, dayCounter);
                    const hasEntries = entries.some((entry) =>
                        entry.date && entry.date.toDateString() === currentDate.toDateString()
                    );

                    let dayStyles = dayCounter === selectedDate.getDate() ? 'selected' : '';
                    if (hasEntries) {
                        dayStyles += ' highlighted';
                    }

                    weekDays.push(
                        <td
                            key={dayCounter}
                            className={dayStyles}
                            onClick={()=> handleShowEntries(currentDate)}
                        >
                            {dayCounter}
                        </td>
                    );

                    dayCounter++;
                }
            }

            days.push(<tr>{weekDays}</tr>);
                if (dayCounter > lastDate) break;
            }

        return (
            <table className="calendar">
                <tbody>{days}</tbody>
            </table>
        );
    }

    return <div>
        <CalendarPr
            previousMonth={previousMonth}
            nextMonth={nextMonth}
            selectedDate={selectedDate}
            renderCalendar={renderCalendar}
            handleDateChange={handleDateChange}
            renderList={renderList}
        />
    </div>
}

export default Calendar;