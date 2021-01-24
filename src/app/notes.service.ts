import {Injectable} from '@angular/core'
import { HttpClient,HttpClientModule, HttpResponse } from '@angular/common/http';
import {Store} from '@ngrx/store'
import {AppState} from './redux/app.state'
import {AddNote, LoadNotes} from './redux/notes.action'
import {Note} from './note.model'
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/toPromise'
import { Action } from 'rxjs/internal/scheduler/Action';
//import { Observable } from 'rxjs/internal/Observable';
import { of, Observable } from "rxjs";

@Injectable()
export class NotesService {

  static BASE_URL: string = 'http://localhost:56172/';
  constructor(private http: HttpClient, private store: Store<AppState>) {}
/*
  loadNotesw(): void {
    this.http.get<{notes: Note[]}>(NotesService.BASE_URL + 'api/Note').pipe(
      map(note => note.notes || [1,2,3]))//http.request('my-friends.txt').subscribe(response => this.friends = response.text());
      .toPromise()
      .then((_notes: Note[]) => {console.log(_notes.values+"wefwe");debugger
        this.store.dispatch(new LoadNotes(_notes))
      })
  }
*//*
  load(){
    return this.http.get(NotesService.BASE_URL + 'api/Note');
  }

  loadNotes() {
    this.http.get(NotesService.BASE_URL + 'api/Note').pipe(
      map((response: HttpResponse<Note[]>) => response.body as Note[] ))
      .toPromise()
      .then((notes: Note[]) => {
        this.store.dispatch(new LoadNotes(notes))
      })
  }

  getUsers() {
    return this.http.get(NotesService.BASE_URL + 'api/Note')
      .pipe(map(function (res) {
        return res.results;
      }))
      .pipe(map(notes => {
        return notes.map(note => {
          return {
            Description: note.Description ,
            NoteText: note.NoteText
          };
        });
      }));
    }

  /*
  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
      .map((response: Response) => response.json())
      .toPromise()
      .then((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars))
      })
  }
  /*/

  
  loadNotes(): void {
    this.http.get(NotesService.BASE_URL + 'api/Note').pipe(
      )
      .toPromise()
      .then((notes: Note[]) => {
        this.store.dispatch(new LoadNotes(notes));
      })
  }
  

  /*

  loadNotes(): void {
    this.http
      .get<{ items: Note[] }>(
        'http://localhost:56172/api/Note'
        //'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map(note => note.items || [])).toPromise().then((notes:Note[])=>{console.log(notes+"wefwe");debugger; this.store.dispatch(new LoadNotes(notes))})
  }
/*
  addNote(note: Note) {
    this.http.post(NotesService.BASE_URL + 'notes', note)
      .map((response: Response) => response.json())
      .toPromise()
      .then((note: Note) => {
        this.store.dispatch(new AddNote(note))
      })
  }*/
}
