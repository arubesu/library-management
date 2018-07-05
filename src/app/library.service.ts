import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private booksUrl = 'api/books';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.booksUrl);    
  }
}
