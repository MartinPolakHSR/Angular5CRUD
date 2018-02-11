import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../item.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  item: any;
  angForm: FormGroup;
  title = 'Edit Item';
  constructor(private route: ActivatedRoute, private router: Router, private service: ItemService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ]
   });
  }

  updateItem(name, description) {
    this.route.params.subscribe(params => {
    this.service.updateItem(name, description, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.item = this.service.editItem(params['id']).subscribe(res => {
        this.item = res;
      });
    });
  }
}
