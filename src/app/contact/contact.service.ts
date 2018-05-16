import {Injectable} from '@angular/core';
import {Contact} from './contact-list/contact';
import {ContactHttpService} from './contact-list/services/contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // contacts: Contact [];


  constructor(private contactHttpService: ContactHttpService) {

    /*
     this.contacts = [];
     this.contacts.push(new Contact(1, 'Antti', 'Karjalainen'));
     this.contacts.push(new Contact(2, 'Arto', 'Lindgren'));
     this.contacts.push(new Contact(3, 'Iso', 'Mies'));
     */
  }

  /*
  getContacts(): Contact[] {
    return this.contacts;

  */


  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }


}
