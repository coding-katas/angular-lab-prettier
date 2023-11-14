import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css'],
})
export class NavBarComponent {
  onNavItemClick() {
    const navElements = document.querySelectorAll('nav');
    navElements.forEach((navElement: HTMLElement) => {
      navElement.classList.toggle('active');
    });
  }
}
