import React, {useState} from "react";
import Calendar from "./Calendar";

function DayPage() {
    const [isEditing, setIsEditing] = useState(false); /* хранит состояние редактирования. true
    означает, что пользователь редактирует запись */
    const [selectedDate, setSelectedDate] = useState(new Date()); // хранит выбранную дату
    const [inputValue, setInputValue] = useState(''); // хранит значение текстового поля ввода
    const [entries, setEntries] = useState([{ /*хранит массив объектов, представляющих
        записи. Каждая запись содержит дату и текст */
        date: new Date(),
        text:''
    }]);
    const [editIndex, setEditIndex] = useState(-1); /* хранит индекс записи, которую пользователь
    хочет отредактировать. Значение -1 означает, что нет активной редакции */
    const filteredEntries = entries.filter(entry => entry.date.toDateString() === selectedDate.toDateString());
   /* функция для рисования элемента добавления записи через текстовое поле и кнопку. Она рендерится только если
   выбранная дата равна текущей дате */
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

    /*  функция для добавления новой записи или сохранения измененной записи. Если выбранная дата не равна текущей дате
      или ввод пуст, функция ничего не делает. В противном случае, она обновляет массив записей (entries), либо
      добавляет новую запись, либо обновляет существующую. Также сбрасывает значение ввода на пустое и завершает
      редактирование */

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

    /* функция для удаления записи по указанному индексу. Она фильтрует массив записей, оставляя только записи с
    другими индексами */
    function handleDeleteEntry(index) {
        const updatedEntries = entries.filter((entry, i) => i !== index);
        setEntries(updatedEntries);
    }

    /* функция для подготовки к редактированию записи. Она устанавливает значение ввода в текст редактируемой записи,
    устанавливает индекс записи в editIndex и устанавливает флаг isEditing в true */
    function handleEditEntry(index) {
        const entryToEdit = entries[index];
        // setSelectedDate(new Date(entryToEdit.date));
        setInputValue(entryToEdit.text);
        setEditIndex(index);
        setIsEditing(true);
    }

    // функция для обновления выбранной даты
    function handleShowEntries(date) {
        setSelectedDate(date);
    }


    /* функция для рендеринга списка всех записей. Она итерирует по массиву записей и отображает каждую запись в виде
    элемента списка. Каждая запись имеет кнопку для удаления и кнопку для редактирования. */
    function renderList() {
        return <ul className="entry-list">
            {filteredEntries.map((entry, index) => (
                <li className="entry-item" key={index}>
                    <p>{entry.text}</p><p className="entry-buttons">
                    <button onClick={() => handleDeleteEntry(index)} className="button">Удалить</button>
                    <button onClick={() => handleEditEntry(index)} className="button">Редактировать</button>
                </p>
                </li>
            ))}
        </ul>
    }
    // функция для отображения заголовка страницы дня с выбранной датой
    function renderDayTittle() {
        return <h2 className="dayTittle">Страница дня {selectedDate.toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'})}</h2>
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

    return (
        <div className="day-page">
            {renderDayTittle()}
            <Calendar
                renderAddElement={renderAddElement}
                renderList={renderList}
                entries={entries}
                handleShowEntries={handleShowEntries}
                previousMonth={previousMonth}
                nextMonth={nextMonth}
            />
        </div>
    );
}

export default DayPage;