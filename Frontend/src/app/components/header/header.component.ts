import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuVisible: boolean = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  selectCategory(category: string) {
    this.menuVisible = false;
    if (category === 'all') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/home', category]);
    }
  }
}


