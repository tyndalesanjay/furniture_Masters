import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ContactService } from '../services/contact.service';
import { Message } from '../interfaces/message.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  messages: Message[] = [];
  p: any;
  toggle: Boolean = false

  constructor(private contactService: ContactService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {

    this.contactService.getAll().subscribe((data: any) => {
      this.messages = data.results
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

  // Deletes a message from the contact service
  deleteMessage(id: any) {
    this.contactService.deleteMessage(id).subscribe((data) => {
      if(data) {
        alert('Message Deleted')
      } else {
        alert('Message was not Deleted, Try Again')
      }
    })
  }

}
