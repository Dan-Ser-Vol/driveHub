import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost, IPostRes} from '../interfaces';
import {urls} from '../constants/urls';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  getAll():Observable<IPostRes> {
    return  this.http.get<IPostRes>(urls.posts.getAll)
  }
  create (data: IPost) {
    return this.http.post<IPost>(urls.posts.create, data)
  }

  updateById (id: number, data: IPost):Observable<IPost> {
    return this.http.put<IPost>(urls.posts.updateById(id), {data})
  }

  deleteById (id: number):Observable<void> {
    return this.http.delete<void>(urls.posts.deleteById(id))
  }
}
