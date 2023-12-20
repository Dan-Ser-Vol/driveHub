import {Component, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../services/post.service";
import {IPost} from "../../../interfaces";


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {
  postForm: FormGroup
  posts: IPost[]


  constructor(
    public postService: PostService
  ) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }

   ngOnInit() {
    this.postService.getTriggerStatus().subscribe(()=>{
      this.postService.getAll().subscribe(value => this.posts = value.data);
    })
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postService.create(this.postForm.value);
      this.postForm.reset()
    }
  }
}
