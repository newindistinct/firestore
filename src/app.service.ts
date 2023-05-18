import { Injectable } from '@nestjs/common';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './config';

@Injectable()
export class AppService {
  data: any[] = [];
  id: any[] = [];
  async addData() {
    const docRef = await addDoc(collection(db, "users"), {
      first: "new",
      last: "ner",
      born: 2000
    });
    return docRef;
  }
  async getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // this.id.push(doc.id);
      this.data.push(doc.id,doc.data());
      });
    return this.data;
  }
}
