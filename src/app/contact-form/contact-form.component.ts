import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  collection$: AngularFireObject<{}>;
  collection1$: AngularFireList<{}>;

  constructor(private db: AngularFireDatabase ) {
    this.collection1$ = db.list('/collection');
    this.collection$ = db.object('/collection').valueChanges().subscribe(snapshot => {
    console.log(snapshot)
    console.log("________________-------________________")
  });







  }

  add(collection: HTMLInputElement){
    this.collection1$.push(collection.value);
    collection.value = '';
  }

  weights = [
    {id: 1, name: 'Lightweight'},
    {id: 2, name: 'Moderate'},
    {id: 3, name: 'Heavy'},  
  ];
  log(x) { console.log(x); }

  submit(object) {
      console.log(object);
      console.log("Done");
      this.collection1$.push(object);
  }
}