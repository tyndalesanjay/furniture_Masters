import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { UserInterface } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  toggle: Boolean = false
  users: UserInterface[] = []
  p: any;

  constructor(private userService: UserService, public auth: AuthService, private router: Router) { }

  // Hide the menu.
  hideMenu() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  // Subscribes all users.
  getAllUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data.data
      
    })
  }

  // Deletes a user.
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: any) => {
      window.location.reload()
      alert("User Deleted!!")
    })
  }

  // Logs the user out.
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'success' } });
  }
}
