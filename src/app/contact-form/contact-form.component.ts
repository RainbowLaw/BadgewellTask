import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import firebase = require('../../../node_modules/firebase');

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  collection1$: AngularFireList<{}>;
  collection2$;

  constructor(public db: AngularFireDatabase ) {
    this.collection1$ = db.list('/collection');
    this.collection2$ = db.list('/collection').valueChanges()
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

  submit(a,b,c) {
      console.log(a);
      console.log(b);
      console.log(c);
      console.log("Submitted");
      this.collection1$.push(a);
      this.collection1$.push(b);
      this.collection1$.push(c);
  }
}