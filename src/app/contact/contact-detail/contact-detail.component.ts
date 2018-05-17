import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {Contact} from '../contact-list/contact';

@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) {
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
     console.log(contactId);
     this.contactService.getContactById(contactId).subscribe(response => {
       this.contact = response;
       console.log(this.contact);

     });

  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

}
