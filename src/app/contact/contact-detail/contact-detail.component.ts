import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {Contact} from '../contact-list/contact';
import {ToolbarService} from '../ui/toolbar/toolbar.service';
import {ToolbarAction} from '../ui/toolbar/toolbar-action';
import {ToolbarOptions} from '../ui/toolbar/toolbar-options';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']

})


export class ContactDetailComponent implements OnInit {

  contact: Contact;
  editingEnabled: Boolean;
  contactId;
  any;


  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService, private toolbar: ToolbarService, public snackbar: MatSnackBar) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {

    this.contactId = this.route.snapshot.paramMap.get('id');
    let toolbarActions: ToolbarAction [];

    if (this.contactId == null) {

      /* create contact */

      this.editingEnabled = true;
      toolbarActions = [];

    } else {
      /* view/edit contact */
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed!');
        console.error(error);
        this.router.navigate(['/contacts']);

      });
    }

    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }


  onSave(): void {
    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = false
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
        this.snackbar.open('Created contact!', 'OK', {duration: 3000});
      });
    } else {
      // Edit contact
      console.log(this.contact);
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
        this.snackbar.open('Save success!', 'OK', {duration: 2000});
      });
    }


  }

  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      // Edit mode on with snackbar
      this.snackbar.open('Edit mode enabled', 'OK', {
        duration: 3000
      });
      console.log('edit mode enabled');
      toolbarActions = [
        new ToolbarAction(this.onDelete.bind(this), 'delete'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];

    } else {

      // Edit mode off
      console.log('edit mode disabled');
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
      this.snackbar.open('Removed contact successfully.', 'OK', {duration: 3000});
    });
  }
}


