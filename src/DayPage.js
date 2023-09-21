import React, {useState} from "react";
import Calendar from "./Calendar";

function DayPage() {
    const [selectedDate, setSelectedDate] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [entries, setEntries] = useState([]);

    // Функция для обработки выбора даты
    function handleDateChange(date) {
        setSelectedDate(date);
    }

    // Функция для обработки Добавления записи

    function handleAddEntry() {
        if (inputValue.trim() !== ''){
            const newEntry = {
                date: selectedDate,
                text: inputValue
            };
            setEntries([...entries, newEntry]);
            setInputValue('')
        }
    }

    //Функция для обработки удаления записи
    function handleDeleteEntry(index) {
        const updatedEntries = entries.filter((entry, i) => i !== index);
        setEntries(updatedEntries);
    }

    return (
        <div className="day-page">
            <h2>Страница дня</h2>
            <Calendar onChange={handleDateChange} />
            <div className="entry-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button onClick={handleAddEntry}>Добавить запись</button>
            </div>
            <ul className="entry-list">
                {entries.map((entry, index) => (
                    <li className="entry-item" key={index}>
                        <p>{entry.text}</p>
                        <button onClick={()=> handleDeleteEntry(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DayPage;