import {Injectable} from '@angular/core';
import {Contact} from './contact-list/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact [];


  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Antti', 'Karjalainen'));
    this.contacts.push(new Contact(2, 'Arto', 'Lindgren'));
    this.contacts.push(new Contact(3, 'Iso', 'Mies'));

  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
