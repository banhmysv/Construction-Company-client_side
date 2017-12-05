import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from "@angular/forms";
import { ContactService } from "../../Service-Api/contact.service";
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  private listContact;
  private formContact;

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
  addNewContact(formData) {
    console.log('adding new Contact ...');
    console.log(formData);
    this._contactService
      .addNewContacts(formData)
      .then(res => console.log(res))
      .then(() => {
        this.formContact.reset()
      });
  }
  ngOnInit() {
    this.createContact();
    this.loadAllContact();
  }

}
