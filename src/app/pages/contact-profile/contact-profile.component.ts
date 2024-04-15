import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { CommonModule } from '@angular/common';
import { Contact } from '../../components/contact/contact';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-profile',
  standalone: true,
  templateUrl: './contact-profile.component.html',
  styleUrl: './contact-profile.component.css',
  imports: [CommonModule, ContainerComponent, RouterLink],
})
export class ContactProfileComponent implements OnInit {
  contact: Contact = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    birthday: '',
    social: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.contactService.getById(parseInt(id)).subscribe((contact) => {
        this.contact = contact;
      });
    }
  }

  delete() {
    if (this.contact.id) {
      this.contactService.deleteContact(this.contact.id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }
}
