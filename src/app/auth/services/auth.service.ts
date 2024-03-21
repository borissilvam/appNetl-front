import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDTO } from '../interfaces/loginDTO.interface';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }


 private baseUrl : string = environment.apiUrl;

  login(dataUser: loginDTO): Observable<User>{

    const url: string = `${this.baseUrl}/users/2`;

    return this.http.get<User>(url);
  }
}
