import { Routes } from '@angular/router';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

export const routes: Routes = [
  {
    path: 'formulario',
    component: ContactFormComponent,
  },
  {
    path: 'lista-contatos',
    component: ContactListComponent,
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full',
  },
];
