import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router) { }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  })
  ngOnInit(): void {}

  // Send a Message to the user.
  onSubmit() {
    this.contactService.sendMessage(this.contactForm.value).subscribe((data: any) => {
      if(!data) {
        console.error(this.contactForm.value);
        alert('Failed to send Message')
      } else {
        alert('Your Message has been Sent, Please wait for an email from us!')
        this.router.navigate(['/home'])
      }
    })
  }

}
