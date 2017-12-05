import { Injectable } from '@angular/core';

import { Http, Response, Headers, ResponseOptions, RequestOptions } from "@angular/http";

@Injectable()
export class SubscriberService {

  private api: string = 'http://localhost:2403';
  private obj: string = 'subscriber';
  private opts = new ResponseOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

  constructor(private _http: Http) { }

  private handleErr(err: any): Promise<any> {
    console.log(err);
    return Promise.reject(err.message || err);
  }

  // getAllsubscriber() {
  //   return this._http
  //     .get(`${this.api}/${this.obj}`)
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(this.handleErr);
  // }
  // getsubscriberByID(id) {
  //   return this._http
  //     .get(`${this.api}/${this.obj}/${id}`)
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(this.handleErr);
  // }
  addNewsubscriber(formData: any) {
    return this._http
      .post(`${this.api}/${this.obj}`, JSON.stringify(formData), this.opts)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleErr);
  }

  deletesubscriberByID(id) {
    return this._http
      .delete(`${this.api}/${this.obj}/${id}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleErr);
  }


}
