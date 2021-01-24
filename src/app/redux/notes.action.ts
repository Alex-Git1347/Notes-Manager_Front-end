import {Action} from '@ngrx/store'
import {Note} from '../note.model'

export namespace NOTE_ACTION {
  export const ADD_NOTE = 'ADD_NOTE'
  export const DELETE_NOTE = 'DELETE_NOTE'
  export const UPDATE_NOTE = 'UPDATE_NOTE'
  export const LOAD_NOTES = 'LOAD_NOTES'
}

export class AddNote implements Action {
  readonly type = NOTE_ACTION.ADD_NOTE

  constructor(public payload: Note) {}
}

export class DeleteNote implements Action {
  readonly type = NOTE_ACTION.DELETE_NOTE

  constructor(public payload: Note) {}
}

export class UpdateNote implements Action {
  readonly type = NOTE_ACTION.UPDATE_NOTE

  constructor(public payload: Note) {}
}

export class LoadNotes implements Action {
  readonly type = NOTE_ACTION.LOAD_NOTES

  constructor(public payload: Note[]) {console.log(payload);}
}

export type NotesAction = AddNote | DeleteNote | UpdateNote | LoadNotes
