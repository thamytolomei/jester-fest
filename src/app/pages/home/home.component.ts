import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public router: Router,
  ) { }

  redirectTo(page:string){
    this.router.navigateByUrl(page);
  }
}
