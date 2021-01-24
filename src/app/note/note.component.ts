import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import {Note} from '../note.model'
import {AppState} from '../redux/app.state'
import {DeleteNote, UpdateNote} from '../redux/notes.action'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input() note: Note

  constructor(private store: Store<AppState>) {}

  onDelete() {
    this.store.dispatch(new DeleteNote(this.note))
  }

  onBuy() {
    this.store.dispatch(new UpdateNote(this.note))
  }

}
