import React, {useState} from "react";
import DayPage from "./DayPage";
import Calendar from "./Calendar";
import entry from "./Entry";

function DayPageContainer() {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [inputValue, setInputValue] = useState('');
    const [entries, setEntries] = useState([
        {
            date: '',
            text: ''
        }
    ]);
    const [editIndex, setEditIndex] = useState(-1);

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    function handleAddEntry() {
        // Функция для обработки добавления записи
        // ...
    }

    function handleDeleteEntry(index) {
        const updatedEntries = entries.filter((entry, i) => i !== index);
        setEntries(updatedEntries)
    }

    function handleEditEntry(index) {
        // Функция для редактирования записи
        // ...
    }

    function handleShowEntries(date) {
        setSelectedDate(date);
    }

    return (
        <div>
            <DayPage
                selectedDate={selectedDate}
                inputValue={inputValue}
                isEditing={isEditing}
                entries={entries}
                handleAddEntry={handleAddEntry}
                handleDeleteEntry={handleDeleteEntry}
                handleEditEntry={handleEditEntry}
            />
            <Calendar
                selectedDate={selectedDate}
                entries={entries}
                handleDateChange={handleDateChange}
                handleShowEntries={handleShowEntries}
            />
        </div>
    );
}

export default DayPageContainer;