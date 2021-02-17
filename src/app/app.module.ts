import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'

import {AppComponent} from './app.component'
import {NotesFormComponent} from './notes-form/notes-form.component'
import {NoteComponent} from './note/note.component'
import {notesReducer} from './redux/notes.reducer'
import {NotesService} from './notes.service'
//import {HttpModule} from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotesFormComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({notePage: notesReducer})
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
