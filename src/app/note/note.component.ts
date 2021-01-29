import {Component, Input} from '@angular/core'
import {Note} from '../note.model'
import { NotesService } from '../notes.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input() note: Note
  noteDescription: string
  noteNoteText: string
  flag:boolean=false;
  
  constructor(private service: NotesService) {}

  onDelete() {
    this.service.deleteNote(this.note)
  }
  onLoad(){
  this.service.loadNote(this.note.Id)
  this.flag=true;
  }
}
