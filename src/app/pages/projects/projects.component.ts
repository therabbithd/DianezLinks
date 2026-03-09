import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../components/link-button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { label: 'Racing Bulb', url: 'https://github.com/therabbithd/RacingBulb' },
    { label: 'Universal Motorsport Timing', url: 'https://github.com/therabbithd/UniversalMotorsportTiming' },
  ];
}
