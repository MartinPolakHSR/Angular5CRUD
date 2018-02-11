import { ItemService } from '../../item.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../Item';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  items: any;

  constructor(private http: HttpClient, private service: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.service.getItems().subscribe(res => {
      this.items = res;
    });
  }

  deleteItem(id) {
    this.service.deleteItem(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
