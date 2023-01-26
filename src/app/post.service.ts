import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { BlogPost } from './BlogPost';


const perPage: number = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page: number, tag: string = "", category: string = ""): Observable<BlogPost[]> {
    
    return this.http.get<BlogPost[]>(`https://intense-basin-84450.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&tag=${tag}&category=${category}`)
    .pipe(catchError(err =>  throwError(err)));
  }

  getPostbyId(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://intense-basin-84450.herokuapp.com/api/posts/${id}`)
    .pipe(catchError(err =>  throwError(err)));
  }

  getCategories(): Observable<any>{
    interface Categories{
      cat: string,
      num: number
    }
    return this.http.get<Categories[]>(`https://intense-basin-84450.herokuapp.com/api/categories`)
    .pipe(catchError(err =>  throwError(err)));
  }

  getTags(): Observable<string[]>{
    return this.http.get<string[]>(`https://intense-basin-84450.herokuapp.com/api/tags`)
    .pipe(catchError(err =>  throwError(err)));
  }

  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`https://intense-basin-84450.herokuapp.com/api/posts?page=${1}&perPage=${Number.MAX_SAFE_INTEGER}`)
    .pipe(catchError(err =>  throwError(err)));
  }

  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(`https://intense-basin-84450.herokuapp.com/api/posts`, data)
    .pipe(catchError(err =>  throwError(err)));
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(`https://intense-basin-84450.herokuapp.com/api/posts/${id}`, data)
    .pipe(catchError(err =>  throwError(err)));
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://intense-basin-84450.herokuapp.com/api/posts/${id}`)
    .pipe(catchError(err =>  throwError(err)));
  }

}
