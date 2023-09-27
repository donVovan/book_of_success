import React, {useState} from "react";
import Calendar from "./Calendar";
import "./DayPage.css"
import DayPagePr from "../presentational/DayPagePr";

function DayPage() {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [inputValue, setInputValue] = useState('');
    const [entries, setEntries] = useState([{
        date:'',
        text:''
    }]);
    const [editIndex, setEditIndex] = useState(-1);

    // Функция для обработки выбора даты
   /* function handleDateChange(date) {
        setSelectedDate(date);
    }*/

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

    function handleDateSelect() {
        if (selectedDate.toDateString() === new Date().toDateString()){
            return <div className="entry-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button onClick={handleAddEntry}>
                    {isEditing ? 'Сохранить' : 'Добавить'}
                </button>
            </div>
        }
    }

    return (
        <div className="day-page">
            <Calendar
                // onChange={handleDateChange}
                entries={entries}
                handleShowEntries={handleShowEntries}
                selectedDate={selectedDate}
            />
            {handleDateSelect()}
            <DayPagePr
            entries={entries}
            handleDeleteEntry={handleDeleteEntry}
            handleEditEntry={handleEditEntry}
            />
        </div>
    );
}

export default DayPage;