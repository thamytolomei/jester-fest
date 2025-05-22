import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  openMenu = false;

  constructor(
    public router: Router,
  ) { }

  redirectTo(page:string){
    this.router.navigateByUrl(page);
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu, 'openMenu');
  }

}
