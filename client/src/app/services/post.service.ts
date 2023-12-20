import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost, IPostRes} from '../interfaces';
import {urls} from '../constants/urls';
import {BehaviorSubject, Observable, tap} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class PostService {

  private trigger = new BehaviorSubject<boolean>(null)
  private postForUpdate = new BehaviorSubject<IPost>(null)

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  getAll(): Observable<IPostRes> {
    return this.http.get<IPostRes>(urls.posts.getAll)
  }

  create(data: IPost) {
    return this.http.post<IPost>(urls.posts.create, data).pipe(
      tap(()=>{
        this.updateTrigger()
      })
    )
  }

  updateById(id: number, data: IPost): Observable<IPost> {
    return this.http.put<IPost>(urls.posts.updateById(id), data).pipe(
      tap(()=>{
        this.updateTrigger()
      })
    )
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(urls.posts.deleteById(id)).pipe(
      tap(()=>{
        this.updateTrigger()
      })
    )
  }

  setPostForUpdate (post:IPost):void {
    this.postForUpdate.next(post)
  }

  getPostForUpdate ():Observable<IPost> {
   return  this.postForUpdate.asObservable()
  }

  getTriggerStatus ():Observable<boolean> {
    return this.trigger.asObservable()
  }

  private updateTrigger () {
    this.trigger.next(!this.trigger.value)
  }
}
