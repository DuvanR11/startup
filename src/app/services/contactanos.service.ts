import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import IPersona from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  constructor(private firestore: Firestore) { }

  addContacto(persona: IPersona){
    const placeRef = collection(this.firestore, 'solicitudes');
    return addDoc(placeRef, persona);
  }
  
  getContacto(): Observable<IPersona[]>{
    const placeRef = collection(this.firestore, 'solicitudes');
    return collectionData(placeRef, { idField: 'id'}) as Observable<IPersona[]>;
  }
}
