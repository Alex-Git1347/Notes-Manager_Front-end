import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs/'
//import {Observable} from 'rxjs/Observable'
import {Note, Notes} from './note.model'
import {AppState} from './redux/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public noteState: Observable<Notes>
  public formMode: boolean= false;
  constructor(private store: Store<AppState>) {}

  formFlag(){
    if(this.formMode===true){this.formMode=false} 
    else if(this.formMode===false){this.formMode=true}
    console.log(this.formMode);
  }

  ngOnInit() {
    this.noteState = this.store.select('notePage');
  }
}
