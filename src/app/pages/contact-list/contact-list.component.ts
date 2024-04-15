import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../components/contact/contact';

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
export class ContactListComponent implements OnInit {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = [];

  filterByText: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((contactList) => {
      this.contacts = contactList;
    });
  }

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
