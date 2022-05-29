import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  response = 'true';

  constructor(
    private http: HttpClient,
    private firebase: AngularFireDatabase,
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,

  ) { }
  documentsList: AngularFireList<any>;


  

  //save data
  saveData(data) {
    return this.db.list('Data').push(data);
  }


  //GET Documents
  getDocuments() {
    this.documentsList = this.firebase.list('Data');
    return this.documentsList.snapshotChanges();
  }

}
