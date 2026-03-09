import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../components/link-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }
