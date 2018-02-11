import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  result: any;
  constructor(private http: HttpClient) {}

  addItem(name, description) {
    const uri = 'http://localhost:4000/items/add';
    const obj = {
      name: name,
      description: description
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getItems() {
    const uri = 'http://localhost:4000/items';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editItem(id) {
    const uri = 'http://localhost:4000/items/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateItem(name, description, id) {
    const uri = 'http://localhost:4000/items/update/' + id;

    const obj = {
      name: name,
      description: description
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteItem(id) {
    const uri = 'http://localhost:4000/items/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
