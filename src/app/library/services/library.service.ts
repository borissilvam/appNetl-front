import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author.interface';
import { Titles } from '../interfaces/titles.interface';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }


  private baseUrl: string = environment.libraryUrl;

  getAuthors(): Observable<Author>{

    const url: string = `${this.baseUrl}/author`

    return this.http.get<Author>(url) ;
  }

  getTitlesByAuthor(author: string ): Observable<Titles[]>{


    const url : string = `${this.baseUrl}/author/${author}/title` ;

    return this.http.get<Titles[]>(url);
  }
}
