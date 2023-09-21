import React, {useState} from "react";
import Calendar from "./Calendar";

function DayPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [inputValue, setInputValue] = useState('');
    const [entries, setEntries] = useState([{
        date:'',
        text:''
    }]);
    const [editIndex, setEditIndex] = useState(-1);

    // Функция для обработки выбора даты
    function handleDateChange(date) {
        setSelectedDate(date);
    }

    // Функция для обработки Добавления записи

    function handleAddEntry() {
        if (inputValue.trim() !== '') {
            if (editIndex >= 0) {
                const updatedEntries = Array.from(entries);
                updatedEntries[editIndex] = {
                    date: selectedDate,
                    text: inputValue
                };
                setEntries(updatedEntries);
                setEditIndex(-1);
            } else {
                const newEntry = {
                    date: selectedDate,
                    text: inputValue
                };
                setEntries([...entries, newEntry]);
            }
            setInputValue('');
        }
    }

    //Функция для обработки удаления записи
    function handleDeleteEntry(index) {
        const updatedEntries = entries.filter((entry, i) => i !== index);
        setEntries(updatedEntries);
    }

    //Функция для редактирования записи
    function handleEditEntry(index) {
        const entryToEdit = entries[index];
        setSelectedDate(new Date(entryToEdit.date));
        setInputValue(entryToEdit.text);
        setEditIndex(index);
    }

    //Функция для смены даты
    function handleShowEntries(date) {
        console.log("Выбранная дата", date);
        setSelectedDate(date);
    }

    return (
        <div className="day-page">
            <h2>Страница дня</h2>
            <Calendar
                onChange={handleDateChange}
                entries={entries}
                handleShowEntries={handleShowEntries}
            />
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
                        <button onClick={()=> handleEditEntry(index)}>Редактировать</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DayPage;