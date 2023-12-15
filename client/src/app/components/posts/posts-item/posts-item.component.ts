import {Component, Input} from '@angular/core';
import {IPost} from "../../../interfaces";
import {faEdit, faRemove} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
})
export class PostsItemComponent {
  removeIcon = faRemove
  editIcon = faEdit
  @Input()
  post: IPost
}
