import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from './components/link-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DianezLinks';

  links = [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'Twitter / X', url: 'https://twitter.com' },
    { label: 'Portfolio', url: 'https://dianez.dev' }
  ];
}
