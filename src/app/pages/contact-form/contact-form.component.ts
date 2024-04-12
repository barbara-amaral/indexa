import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { DividerComponent } from '../../components/divider/divider.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
export class ContactFormComponent {
  contactForm!: FormGroup;

  constructor() {
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
      console.log(this.contactForm.value);
    }
  }

  cancel() {
    console.log('cancelado');
  }
}