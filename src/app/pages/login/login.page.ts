import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {}

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);

      if (user){
        this.redirectUser();
        console.log('User=>',user);
        //video 52:12 https://www.youtube.com/watch?v=VuyoS5NpHVE&t=376s&ab_channel=DominiCode
      }
    }
    catch(error){
      console.log('Error=>', error)
    }
  }

  private redirectUser() :void{
      this.router.navigate(['home'])
  }
  
}
