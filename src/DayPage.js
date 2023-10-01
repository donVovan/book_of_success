import React, {useState} from "react";
import Calendar from "./Calendar";

function DayPage() {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [inputValue, setInputValue] = useState('');
    const [entries, setEntries] = useState([{
        date: new Date(),
        text:''
    }]);
    const [editIndex, setEditIndex] = useState(-1);


   function renderAddElement() {
        if (selectedDate.toDateString() === new Date().toDateString()){
            return <div className="entry-input">
                <textarea
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <p className="addButton">
                    <button onClick={handleAddEntry} className="button">
                        {isEditing ? 'Сохранить' : 'Добавить'}
                    </button>
                </p>
            </div>
        }
    }

    // Функция для обработки Добавления записи

    function handleAddEntry() {
        if (selectedDate.toDateString() !== new Date().toDateString()){
            return;
        }
        if (inputValue.trim() !== '') {
            if (isEditing) {
                const updatedEntries = Array.from(entries);
                updatedEntries[editIndex] = {
                    date: selectedDate,
                    text: inputValue
                };
                setEntries(updatedEntries);
                setEditIndex(-1);
                setIsEditing(false);
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
        // setSelectedDate(new Date(entryToEdit.date));
        setInputValue(entryToEdit.text);
        setEditIndex(index);
        setIsEditing(true);
    }

    //Функция для смены даты
    function handleShowEntries(date) {
        setSelectedDate(date);
    }

    function renderList() {
        return <ul className="entry-list">
            {entries.map((entry, index) => (
                <li className="entry-item" key={index}>
                    <p>{entry.text}</p><p className="entry-buttons">
                    <button onClick={() => handleDeleteEntry(index)} className="button">Удалить</button>
                    <button onClick={() => handleEditEntry(index)} className="button">Редактировать</button>
                </p>
                </li>
            ))}
        </ul>
    }

    function renderDayTittle() {
        return <h2 className="dayTittle">Страница дня {selectedDate.toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'})}</h2>
    }

    return (
        <div className="day-page">
            {renderDayTittle()}
            <Calendar
                renderAddElement={renderAddElement}
                renderList={renderList}
                entries={entries}
                handleShowEntries={handleShowEntries}
            />
        </div>
    );
}

export default DayPage;