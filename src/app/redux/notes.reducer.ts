import {Note} from '../note.model'
import {NOTE_ACTION, NotesAction} from './notes.action'

const initialState = {
  notes: []
}

export function notesReducer(state = initialState, action: NotesAction) {
  switch (action.type) {
    case NOTE_ACTION.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    case NOTE_ACTION.DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter(c => c.Id !== action.payload.Id)]
      }
    case NOTE_ACTION.UPDATE_NOTE:
      const idx = state.notes.findIndex(c => c.Id === action.payload.Id)
      return {
        ...state,
        notes: [...state.notes]
      }
    case NOTE_ACTION.LOAD_NOTES:
      return {
        ...state,
        notes: [...action.payload]
      }
    case NOTE_ACTION.LOAD_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter(c => c.Id === action.payload.Id)]
      }
    default:
      return state
  }
}
