import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private db: Firestore) { }

  // getHouse Data
  getHouseData(uid: string){
    return docData(doc(this.db, "users", uid))
  }
}
