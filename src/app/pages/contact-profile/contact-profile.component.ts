import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { CommonModule } from '@angular/common';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-profile',
  standalone: true,
  templateUrl: './contact-profile.component.html',
  styleUrl: './contact-profile.component.css',
  imports: [CommonModule, ContainerComponent],
})
export class ContactProfileComponent {
  contact: Contact = {
    id: 0,
    name: 'dev',
    phone: '11912345678',
    email: 'dev@email.com',
    birthday: '12/10/1990',
    social: 'dev.com',
  };
}
