import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  message: any = [];
  toggle: Boolean = false

  constructor(private contactService: ContactService, public auth: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getMessage(this.route.snapshot.paramMap.get('id'));
  }

  // Logs a message.
  getMessage(id: any) {
    this.contactService.getById(id).subscribe((data: any) => {
      this.message = data.results
    })
  }

  // Delete a Message
  deleteMessage(id: any) {
    this.contactService.deleteMessage(id).subscribe((data: any) => {
      if(!data) {
        console.error();
      } else {
        this.router.navigate(['/admin'])
        alert('Deleted Message Successfully')
      }
    })
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
