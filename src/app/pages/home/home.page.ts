import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public user$:Observable<User> = this.authSvc.afAuth.user;

  constructor(private menuController: MenuController, private authSvc: AuthService) { }
  
  ngOnInit(){
  }

  ngOnDestroy(): void{
    this.authSvc.logout();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}



