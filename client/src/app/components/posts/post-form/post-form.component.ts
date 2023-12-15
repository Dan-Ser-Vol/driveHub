import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})

export class PostFormComponent implements OnInit{
  form: FormGroup

  constructor(private readonly postService :PostService) {
  }
  ngOnInit(): void {
    this._initForm()
  }

  _initForm ():void {
    this.form = new FormGroup({
      brand: new FormControl('', [ Validators.required,]),
      model: new FormControl('', [ Validators.required,]),
      year: new FormControl(2000, [ Validators.required,]),
      bodyType: new FormControl(''),
      currency: new FormControl(''),
      description: new FormControl(''),
      mileage: new FormControl(0),
      price: new FormControl(0,[ Validators.required,]),
      region: new FormControl(''),
      sold: new FormControl(false),
      status: new FormControl(''),
    })
  }

  save() {
    this.postService.create(this.form.value).subscribe(value => console.log(value))
  }
}
