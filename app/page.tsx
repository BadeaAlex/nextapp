import React from 'react';

// const NewNote = () => <a href="/newNote" className="newNote">New note</a>;
// const Library = () => <a href="/library">Library</a>;
// const ImportNote = () => <a href="/import-note">Import Note</a>;
const NoteForm = () => <div className="NoteForm">Note Form</div>;
const Page = () => {
  return (
    <div className="container">
      <div className="right-side">

        <NoteForm />
      </div>
    </div>

  )
};
export default Page;