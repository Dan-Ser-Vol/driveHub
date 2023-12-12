import {Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {IPost} from '../interfaces';
import {urls} from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsSig = signal<IPost[]>([]);

  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastrService: ToastrService
  ) {
  }

  getAll() {
    return  this.httpClient.get<IPost[]>(urls.posts.getAll).subscribe((posts) => {
      this.postsSig.set(posts)
      this.toastrService.success('All posts is got')
    })
  }
  create (data: IPost) {
    return this.httpClient.post<IPost>(urls.posts.create, data).subscribe((newPost) => {
      this.postsSig.update(posts => [...posts, newPost])
    })
  }
}
