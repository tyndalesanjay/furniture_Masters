import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formData: any = {};
  errors: any = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Registers the user.
  register(): void {
    this.errors = [];
    this.auth.register(this.formData).subscribe(() => {
        this.router.navigate(['login'], {queryParams: { registered: 'success' },});
      },
      (errorResponse) => {
        this.errors.push(errorResponse.error.error);
      }
    );
  }
}
