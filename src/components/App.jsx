import React from 'react';

import { NotesList } from './NotesList';
import notes from '../test/notes.json';

export const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React notes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <NotesList notes={notes} />
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};
