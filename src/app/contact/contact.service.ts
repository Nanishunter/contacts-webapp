import {Injectable} from '@angular/core';
import {Contact} from './contact-list/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact [];


  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Antti', 'Karjalainen'));
    this.contacts.push(new Contact('Arto', 'Lindgren'));
    this.contacts.push(new Contact('Iso', 'Mies'));

  }

  getContacts (): Contact[] {
    return this.contacts;
  }
}
