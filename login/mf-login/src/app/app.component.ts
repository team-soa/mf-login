import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mf-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  public navegation(): void{
    this.router.navigate(['/VistaPrincipal']);
  }
  
  title = 'mf-login';
}

