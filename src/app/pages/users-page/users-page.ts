import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../../types/User';
import { isUserArray } from '../../utils';

@Component({
  selector: 'app-users-page',
  imports: [],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage implements OnInit {
  userService = inject(UserService);

  users = signal<User[]>([]);
  error = signal<string>('');

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      if (isUserArray(data)) {
        this.users.set(data);
      } else {
        this.error.set(data.error);
      }
    });
  }
}
