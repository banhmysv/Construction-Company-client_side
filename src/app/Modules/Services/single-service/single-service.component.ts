import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ContactService } from "../../../Service-Api/contact.service";

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {

  private listContact;
  private formContact;
  private formContactDetail: FormGroup;

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
      .then(res => console.log(res));
  }

  ngOnInit() {
    this.loadAllContact();
  }

}
