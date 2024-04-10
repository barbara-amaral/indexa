import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  imports: [ContainerComponent, DividerComponent],
})
export class ContactFormComponent {}
