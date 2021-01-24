import {Note} from '../note.model'

export interface AppState {
  notePage: {
    notes: Note[]
  }
}
