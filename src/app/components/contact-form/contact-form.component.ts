import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { DividerComponent } from '../divider/divider.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  imports: [ContainerComponent, DividerComponent, ReactiveFormsModule],
})
export class ContactFormComponent {
  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(''),
      social: new FormControl(''),
      observations: new FormControl(''),
    });
  }

  saveContact() {
    console.log(this.contactForm.value);
  }

  cancel() {
    console.log('cancelado');
  }
}
