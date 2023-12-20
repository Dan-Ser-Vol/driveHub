import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../services/post.service";
import {IPost} from "../../../interfaces";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})

export class PostFormComponent implements OnInit {
  form: FormGroup
  postForUpdate: IPost

  constructor(private readonly postService: PostService) {
  }

  ngOnInit(): void {
    this._initForm()
    this.postService.getPostForUpdate().subscribe((value) => {
      this.postForUpdate = value
      if (value) {
        const updatePost = {...value}
        delete updatePost.id
        delete updatePost.image
        delete updatePost.createdAt
        delete updatePost.updatedAt
        this.form.setValue(updatePost)
      }
    })
  }

  _initForm(): void {
    this.form = new FormGroup({
      brand: new FormControl('', [Validators.required,]),
      model: new FormControl('', [Validators.required,]),
      year: new FormControl(2000, [Validators.required,]),
      bodyType: new FormControl(''),
      currency: new FormControl(''),
      description: new FormControl(''),
      mileage: new FormControl(0),
      price: new FormControl(0, [Validators.required,]),
      region: new FormControl(''),
      sold: new FormControl(false),
      status: new FormControl(''),
    })
  }

  save() {
    this.postService.create(this.form.value).subscribe(() => {
      this.form.reset()
    })
  }

  update() {
    this.postService.updateById(this.postForUpdate.id, this.form.value).subscribe(() => {
      this.postService.setPostForUpdate(null)
      this.form.reset()
    })
  }
}
