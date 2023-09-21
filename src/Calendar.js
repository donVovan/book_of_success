import React, {useState} from "react";

function Calendar({onChange}) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    function handleChange(date) {
        setSelectedDate(date);
        onChange(date);
    }

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

        const firstDay = new Date(year, month, 1).getDay();
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
                    weekDays.push(
                        <td
                            key={dayCounter}
                            className={dayCounter === selectedDate.getDate() ? 'selected' : ''}>
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

    return <div className="calendar">
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

export default Calendar;