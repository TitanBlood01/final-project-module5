import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry, map } from "rxjs/operators";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postPerPage = 6;
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialPosts();
  }

  private loadInitialPosts() {
    this.http.get<any[]>(`${this.apiUrl}?_limit=${this.postPerPage}`)
    .pipe(
      map(posts => posts.map(post => ({
        id: post.id,
        title: post.title,
        content: post.body
      }))),
      retry(3),
      catchError(this.handleError)
    )
    .subscribe(posts => {
      this.postsSubject.next(posts);
    });
}

  loadMorePosts(page: number): Observable<Post[]> {
    const skip = (page - 1) * this.postPerPage;
    return this.http.get<any[]>(`${this.apiUrl}?_start=${skip}&_limit=${this.postPerPage}`)
      .pipe(
        map(posts => posts.map(post => ({
          id: post.id,
          title: post.title,
          content: post.body // Mapear body a content
        }))),
        retry(3),
        catchError(this.handleError)
      );
}

  // Método para obtener todas las publicaciones
  getPostById(id: number): Observable<Post> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        map(post => ({
          id: post.id,
          title: post.title,
          content: post.body
        })),
        retry(3),
        catchError(this.handleError)
      );
}

  // Método para agregar una nueva publicación
  añadirPost(post: Omit<Post, 'id'>): Observable<Post> {
    const payload = {
      title: post.title,
      body: post.content,
      userId: 1
    };
    return this.http.post<any>(this.apiUrl, payload)
      .pipe(
        map(response => ({
          id: response.id,
          title: response.title,
          content: response.body
        })),
        catchError(this.handleError)
      );
}

  // Método para editar una publicación existente
  editarPost(id: number, post: Partial<Post>): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para eliminar una publicación
  eliminarPost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Ocurrio un error inesperado', error);
    return throwError(() => new Error('Algo ha ido mal, Por favor Intenta de nuevo mas tarde.'));
  }
}

