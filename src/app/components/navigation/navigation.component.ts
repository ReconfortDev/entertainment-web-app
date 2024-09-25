import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  constructor(private router: Router) {}

  navItems = [
    { icon: 'assets/icon-nav-home.svg', altText: 'Home', route: '/home' },
    { icon: 'assets/icon-nav-movies.svg', altText: 'Movies', route: '/movies' },
    {
      icon: 'assets/icon-nav-tv-series.svg',
      altText: 'TV Series',
      route: '/tv-series',
    },
    {
      icon: 'assets/icon-nav-bookmark.svg',
      altText: 'Bookmark',
      route: '/bookmark',
    },
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
