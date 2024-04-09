import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { DividerComponent } from './components/divider/divider.component';
import { ContactComponent } from './components/contact/contact.component';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

import addressBook from './address-book.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    DividerComponent,
    ContactComponent,
    FormsModule,
  ],
})
export class AppComponent {
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
