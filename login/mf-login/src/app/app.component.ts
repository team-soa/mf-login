import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'Clases/user';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/Servicios/login-service.service';

@Component({
  selector: 'mf-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  usuario: User = new User();
  usuarioNuevo: User = new User();

  constructor(private router: Router, private service: LoginService, private cookieService: CookieService) {}

  ngOnInit(): void {
  }

  public navegation(): void{
    this.router.navigate(['/VistaPrincipal']);
  }

  public login(user: User): void{
    this.service.hacerLogin(user).subscribe(response =>{
      // @ts-ignore
      if(response.token){
        // @ts-ignore
        this.cookieService.set("token", response.token);
        // @ts-ignore
        this.cookieService.set("key", response.key);
        // @ts-ignore
        this.cookieService.set("rol", response.rol);
        // @ts-ignore
        this.cookieService.set("user", JSON.stringify(this.usuario));
        this.router.navigate(['/VistaPrincipal']);
      }
      else{
        alert('Error al ingresar,Favor ingresar un usario y contraseña validos');
      }
    });
  }

  public crearUsuario(): void{
    this.service.registraUsuario(this.usuarioNuevo).subscribe(res => {
      console.log(res);
      alert("Usuario creado con éxito.");
    },
    error => {
      console.log(error);
      alert(error.error.message)
    }
  );
  }
  title = 'mf-login';
}

