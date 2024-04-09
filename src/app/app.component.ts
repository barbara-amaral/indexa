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
  ],
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = addressBook;

  filterContactsByFirstLetter(letter: string): Contact[] {
    return this.contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().startsWith(letter);
    });
  }
}
