import React from 'react';

export const NotesList = props => {
  const { notes = [] } = props;
  console.log(notes);
  const renderNotes = () => {
    return notes.map(note => {
      return (
        <div key={note.id} data-testid="note-item">
          {note.text}
        </div>
      );
    });
  };
  return <div className="list-group">{renderNotes()}</div>;
};
