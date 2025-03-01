import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { NotesList } from '../components/NotesList';
const notes = require('./notes.json');

describe('NotesList Component', () => {
  it('should show list of notes', () => {
    // given
    render(<NotesList notes={notes} />);

    // then
    expect(screen.getAllByTestId('note-item')).toHaveLength(notes.length);
  });

  it('should call onSelect function after note was clicked', () => {
    // given
    const onSelect = jest.fn();
    render(<NotesList notes={notes} onSelect={onSelect} />);

    // when
    const item = screen.getAllByTestId('note-item')[1];
    fireEvent.click(item);

    // then
    expect(onSelect).toHaveBeenCalledWith(notes[1]);
  });

  it('should add `active` class to a note after it was selected', () => {
    // given
    const note = notes[1];
    render(<NotesList notes={notes} selected={note} />);

    // then
    const item = screen.getAllByTestId('note-item')[1];
    expect(item).toHaveClass('active');
  });
});
