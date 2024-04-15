import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.API);
  }

  saveContact(contact: Contact) {
    return this.http.post<Contact>(this.API, contact);
  }
}
