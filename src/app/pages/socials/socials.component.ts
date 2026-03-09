import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../components/link-button.component';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css'
})
export class SocialsComponent {
  links = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/guilermo-dia%C3%B1ez-gomez-a1a59b317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { label: 'GitHub', url: 'https://github.com/therabbithd' },
    { label: 'Twitter / X', url: 'https://x.com/DianezGome16049' },
  ];
}
