import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

import addressBook from '../../address-book.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderComponent,
    DividerComponent,
    ContactComponent,
    FormsModule,
    ContactFormComponent,
    RouterLink,
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = addressBook;

  filterByText: string = '';

  filterContactsByText(): Contact[] {
    if (!this.filterByText) {
      return this.contacts;
    }

    return this.contacts.filter((contact) => {
      return contact.name
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(this.filterByText.toLocaleLowerCase());
    });
  }

  filterContactsByFirstLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter((contact) => {
      return contact.name.toLocaleLowerCase().startsWith(letter);
    });
  }
}
