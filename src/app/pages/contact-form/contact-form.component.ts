import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContainerComponent } from '../../components/container/container.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  imports: [
    ContainerComponent,
    DividerComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl(''),
      social: new FormControl(''),
      observations: new FormControl(''),
    });
  }

  saveContact() {
    if (this.contactForm.valid) {
      const newContact = this.contactForm.value;
      this.contactService.saveContact(newContact).subscribe(() => {
        this.contactForm.reset();
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }

  cancel() {
    this.contactForm.reset();
  }
}
