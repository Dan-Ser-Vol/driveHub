import {Component, Input} from '@angular/core';
import {IPost} from "../../../interfaces";
import {faEdit, faRemove} from "@fortawesome/free-solid-svg-icons";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
})
export class PostsItemComponent {
  removeIcon = faRemove
  editIcon = faEdit
  @Input()
  post: IPost

  constructor(private postService: PostService) {
  }

  update() {
    this.postService.setPostForUpdate(this.post)
  }

  delete() {
    this.postService.deleteById(this.post.id).subscribe()
  }
}
