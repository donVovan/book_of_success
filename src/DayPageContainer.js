import React, {useState} from "react";
import DayPage from "./DayPage";
import Calendar from "./Calendar";

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
        if (selectedDate.toDateString() !== new Date().toDateString()){
            return;
        }
        if (inputValue.trim() !== ''){
            if (isEditing){
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

    function handleDeleteEntry(index) {
        const updatedEntries = entries.filter((entry, i) => i !== index);
        setEntries(updatedEntries)
    }

    function handleEditEntry(index) {
        const entryToEdit = entries[index];
        setInputValue(entryToEdit.text);
        setEditIndex(index);
        setIsEditing(true);
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
                setInputValue={setInputValue}
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