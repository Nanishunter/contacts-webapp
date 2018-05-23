import {Injectable} from '@angular/core';
import {Contact} from './contact-list/contact';
import {ContactHttpService} from './contact-list/services/contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private contactHttpService: ContactHttpService) {


  }


  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  updateContact(contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }

  createContact(contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }
deleteContact (contact): Observable<any> {
  return this.contactHttpService.delete(contact);
}


}
