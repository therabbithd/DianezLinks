import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css'
})
export class LinkButtonComponent {
  @Input() label: string = 'Button';
  @Input() url: string = '#';
  @Input() isInternal: boolean = false;

  constructor(private router: Router) { }

  handleClick() {
    if (!this.url || this.url === '#') return;

    if (this.isInternal) {
      this.router.navigate([this.url]);
    } else {
      window.open(this.url, '_blank');
    }
  }
}
