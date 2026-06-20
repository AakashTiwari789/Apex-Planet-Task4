const addBtn = document.getElementById('add-note');
const notesList = document.getElementById('notes-list');

const inputTitle = document.getElementById('note-title');
const inputContent = document.getElementById('note-content');


// get notesList from localStorage
const savedNotes = JSON.parse(localStorage.getItem('notesList')) || [];
savedNotes.forEach(note => {
    const noteTitle = document.createElement('h3');
    noteTitle.textContent = note.title;

    const noteContent = document.createElement('p');
    noteContent.textContent = note.content;

    const noteItem = document.createElement('li');
    noteItem.appendChild(noteTitle);
    noteItem.appendChild(noteContent);

    notesList.appendChild(noteItem);
});

// disable button if title or content is empty
function toggleAddButton() {
    addBtn.disabled = !inputTitle.value.trim() || !inputContent.value.trim();
    console.log('toggleAddButton called, addBtn.disabled:', addBtn.disabled);
}

inputTitle.addEventListener('input', toggleAddButton);
inputContent.addEventListener('input', toggleAddButton);

addBtn.addEventListener('click', () => {
    const title = inputTitle.value.trim();
    const content = inputContent.value.trim();

    if (title && content) {
        const noteTitle = document.createElement('h3');
        noteTitle.textContent = title;

        const noteContent = document.createElement('p');
        noteContent.textContent = content;

        const noteItem = document.createElement('li');
        noteItem.appendChild(noteTitle);
        noteItem.appendChild(noteContent);

        notesList.appendChild(noteItem);
        // Save note to localStorage
        const notes = JSON.parse(localStorage.getItem('notesList')) || [];
        notes.push({ title, content });
        localStorage.setItem('notesList', JSON.stringify(notes));

        // Clear input fields and disable add button
        inputTitle.value = '';
        inputContent.value = '';
        toggleAddButton();
    }
});