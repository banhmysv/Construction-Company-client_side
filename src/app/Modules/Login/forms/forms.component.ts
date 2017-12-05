import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from "@angular/forms";

import { ContactService } from "../../../Service-Api/contact.service";
import { SubscriberService } from "../../../Service-Api/subscriber.service";
import { AccountService } from "../../../Service-Api/account.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  private listContact;
  private formContact;
  private uId: {};
  private formLogin;
  private formSub;
  constructor(private _contactService: ContactService, private _accountService: AccountService,
    private _fb: FormBuilder, private _subService: SubscriberService) {
  }


  private createForm() {
    this.formContact = this._fb.group({
      id: '',
      name: '',
      company: '',
      email: '',
      subject: '',
      message: ''
    });
    this.formLogin = this._fb.group({
      id: '',
      username: '',
      password: '',
      email: ''
    });
    this.formSub = this._fb.group({
      id: '',
      email: ''
    });
  }
  // obj contact
  private loadAllContact() {
    this._contactService.getAllContacts()
      .then(res => {
        this.listContact = res;
        console.log(this.listContact);
      }).catch(err => console.log(err));

  }
  addNewContact(formData) {
    console.log('adding new Contact ...');
    this._contactService
      .addNewContacts(formData)
      .then(res => console.log(res))
      .then(() => {
        this.formContact.reset()
      });
  }

  // obj login
  loginSystem(formData) {
    console.log('Login to sys...');
    this._accountService.loginSystem(formData)
      .then(res => {
        this.uId = res;
        console.log(res);
        this.formLogin.reset();
      })
      .catch(err => console.log(err));
  }

  // obj sub
  subscriberNew(formData) {
    console.log('adding new sub ...');
    this._subService
      .addNewsubscriber(formData)
      .then(res => console.log(res))
      .then(() => {
        this.formLogin.reset()
      });
  }

  ngOnInit() {
    this.createForm();
    // this.loadAllContact();
  }
}
