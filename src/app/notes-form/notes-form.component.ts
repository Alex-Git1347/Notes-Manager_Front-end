import {Component} from '@angular/core'
import { Store } from '@ngrx/store'
//import * as moment from 'moment'
import {Note} from '../note.model'
import {NotesService} from '../notes.service'
import { AppState } from '../redux/app.state'

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent {

  noteDescription: string = ''
  noteNoteText: string = ''

  constructor(private store: Store<AppState>, private service: NotesService) {
  }

  onAdd() {
    if (this.noteDescription === '' || this.noteNoteText === '') return

    
    const note = new Note( this.noteDescription, this.noteNoteText)

    //this.service.addNote(note)

    this.noteDescription = ''
    this.noteNoteText = ''
  }

  onLoad() {
    this.service.loadNotes()
  }

}
