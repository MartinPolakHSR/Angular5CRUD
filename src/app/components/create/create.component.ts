import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Item';
  angForm: FormGroup;
  constructor(private itemservice: ItemService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ]
   });
  }
  addItem(name, description) {
      this.itemservice.addItem(name, description);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
