import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginDTO } from '../../interfaces/loginDTO.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  public loginForms: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ){}

  public dataLogin?: loginDTO ;


  getFieldErros(field: string): string | null{
    if ( !this.loginForms.controls[field]) return null ;

    const errors = this.loginForms.controls[field].errors || {} ;

    for ( const key of Object.keys(errors)) {


      switch(key) {
        case 'required' :
          return 'Este campo es requerido';
        case 'email' :
          return 'Email no es valido';
      }


    }

    return null ;
  }


  onLogin():void{
    if(this.loginForms.invalid){
      this.loginForms.markAllAsTouched();
      return;
    }

    this.dataLogin = this.loginForms.value

    if(this.dataLogin)
//Enviar los datos al servicio

    this.authService.login(this.dataLogin).subscribe(
      user =>{
        this.router.navigate(['/'])
      }
    )
  }

}
