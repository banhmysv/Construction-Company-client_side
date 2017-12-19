import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ContactService } from "../../Service-Api/contact.service";
@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrls: ['./contact-management.component.css']
})
export class ContactManagementComponent implements OnInit {
  private listContact;
  private contact;
  private formContact: FormGroup;

  constructor(private _contactService: ContactService, private _fb: FormBuilder) { }

  private createContact() {
    this.formContact = this._fb.group({
      id: '',
      name: '',
      company: '',
      email: '',
      subject: '',
      message: ''
    });
 
  }

  private loadAllContact() {
    this._contactService.getAllContacts()
      .then(res => {
        this.listContact = res;
        console.log(this.listContact);
      }).catch(err => console.log(err));

  }

  private deleteContac(id) {
    this._contactService.deleteContactsByID(id)
      .then(res => console.log(res))
      .then(() => {
        this.loadAllContact();
      }).catch(err => console.log(err));
  }

  clickPut(con) {
    return this._contactService
      .getContactsByID(con.id)
      .then(res => this.contact = res);
  }
  ngOnInit() {
    this.loadAllContact();
  }


}
