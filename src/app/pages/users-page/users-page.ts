import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../../types/User';
import { isUserArray } from '../../utils';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-users-page',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage implements OnInit {
  userService = inject(UserService);

  users = signal<User[]>([]);
  error = signal<string>('');

  readonly date = signal(Date.now());

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      if ('error' in data) {
        this.error.set(data.error);
      } else {
        this.users.set(data);
      }
    });
  }
}
