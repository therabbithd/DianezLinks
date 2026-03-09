import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css'
})
export class LinkButtonComponent {
  @Input() label: string = 'Button';
  @Input() url: string = '#';

  goToUrl() {
    if (this.url && this.url !== '#') {
      window.open(this.url, '_blank');
    }
  }
}
