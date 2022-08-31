import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  currentUser: any = {};

  constructor( public authService: AuthService, private actRoute: ActivatedRoute) {
    // let id = this.actRoute.snapshot.paramMap.get('id');
    // this.authService.getUserProfile(id).subscribe((res) => {
    //   this.currentUser = res.msg;
    // });
  }

  ngOnInit(): void {
  }

  // logout() {
  //   this.authService.doLogout();
  // }

}
