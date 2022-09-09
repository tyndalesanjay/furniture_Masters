import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  toggle: Boolean = false;
  user: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public auth: AuthService,
    private fb: FormBuilder
  ) {}

  // Update form group with username and email
  updateForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUserById(id);
  }

  // Updates the user s data.
  getUserById(id: any) {
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data.data;

      this.updateForm.setValue({
        username: this.user.username,
        email: this.user.email
      });
    });
  }

  // Updates a user.
  updateUser(id: any) {
    this.userService.updateUser(id, this.updateForm.value).subscribe((data: any) => {
      if (!data) {
        console.log("error");
        
      } else {
        console.log("Updated");
        this.logout();
      }
    });
  }

  // Deletes a user.
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: any) => {
      if(data) {
        console.log("Data Deleted");
      } else {
        console.error();
      }
    });
  }

  // Hide the menu.
  hideMenu() {
    this.toggle = !this.toggle;
  }

  // Logs the user out.
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'success' } });
  }
}
