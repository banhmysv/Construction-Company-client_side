import { Injectable } from '@angular/core';

import { Http, Response, Headers, ResponseOptions, RequestOptions } from "@angular/http";

@Injectable()
export class ContactService {

  private api: string = 'http://localhost:2403';
  private obj: string = 'contact';
  private opts = new ResponseOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

  constructor(private _http: Http) { }

  private handleErr(err: any): Promise<any> {
    console.log(err);
    return Promise.reject(err.message || err);
  }

  getAllContacts() {
    return this._http
      .get(`${this.api}/${this.obj}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleErr);
  }
  getContactsByID(id) {
    return this._http
      .get(`${this.api}/${this.obj}/${id}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleErr);
  }
  addNewContacts(formData: any) {
    return this._http
      .post(`${this.api}/${this.obj}`, JSON.stringify(formData), this.opts)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleErr);
  }

  deleteContactsByID(id) {
    return this._http
      .delete(`${this.api}/${this.obj}/${id}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleErr);
  }



  // getContactsByName(name) {
  //   return this._http
  //     .get(`${this.api}/${this.obj}/get/name?name=${name}`)
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(this.handleErr);
  // }
  // getContactsByEmail(email){
  //   return this._http
  //     .get(`${this.api}/${this.obj}/get/email/?email=${email}`)
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(this.handleErr);
  // }
  // getGender(){
  //   return ['Male', 'Female'];
  // }


  // updateContacts(formData) {
  //   return this._http
  //     .put(`${this.api}/${this.obj}/update`, JSON.stringify(formData), { headers: this.opts.headers })
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(this.handleErr);
  // }


}
