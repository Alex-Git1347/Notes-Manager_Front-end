import {Component,Input} from '@angular/core'
import { Store } from '@ngrx/store'
import {Note} from '../note.model'
import {NotesService} from '../notes.service'
import { AppState } from '../redux/app.state'

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent {

  @Input() note: Note
  noteDescription: string = ''
  noteNoteText: string = ''

  constructor( private service: NotesService) {
  }

  ngOnInit(): void {

    this.onLoad();
  }

  onAdd() {
    if (this.noteDescription === '' || this.noteNoteText === '') return

    const note = new Note( this.noteDescription, this.noteNoteText)
    this.service.addNote(note)
    this.noteDescription = ''
    this.noteNoteText = ''
  }

  onLoad() {
    this.service.loadNotes()
  }

}
