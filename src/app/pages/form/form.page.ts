import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  constructor(private authSvc:AuthService, private router:Router) {}

  ngOnInit() {}

  async onRegister(email,password) {
    try{
      const user = await this.authSvc.register(email.value, password.value);
      if (user){
        this.redirectUser();
        console.log('User=>', user);
      }
    }
    catch(error){
      console.log('Error=>', error)}
  }
  
  private redirectUser() :void{
    this.router.navigate(['login'])
  }

}
