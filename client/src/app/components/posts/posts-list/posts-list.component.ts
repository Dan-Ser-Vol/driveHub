import {Component, OnInit} from '@angular/core';
import {faRemove, faEdit} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../services/post.service";
import {IPost} from "../../../interfaces";


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit{
  removeIcon = faRemove
  editIcon = faEdit
  postForm: FormGroup

  constructor(
    public postService: PostService
  ) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }
  ngOnInit():void {
    this.postService.getAll()
  }

  onSubmit () {
    if(this.postForm.valid){
      this.postService.create(this.postForm.value);
      this.postForm.reset()
    }
  }
}
