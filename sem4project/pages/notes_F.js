import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './Note_search';
import NotesList from './notesList';


const Notes_F = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'I am so powerful !',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'Rangon ki barkha hai kusboo ki aandhi hai',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		},
	]);
	const [searchText, setSearchText] = useState('');
  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
    
  return (
    <>
   <div className="container">
   <Search handleSearchNote={setSearchText} />
    <NotesList 
    notes={notes.filter((note) =>
		note.text.toLowerCase().includes(searchText)
	)}
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    />
  
    </div>
    </>
  )
}
export default Notes_F;