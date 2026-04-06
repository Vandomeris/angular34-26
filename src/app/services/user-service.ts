import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../types/User';
import { catchError, map, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      retry(3),
      map((users) => users.filter((user) => user.id < 5)),
      catchError((err: HttpErrorResponse) => {
        return of({
          error: err.message,
        });
      }),
    );
  }
}
