import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import {Article} from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  public user$:Observable<User> = this.authSvc.afAuth.user;
  noticias: Article[] = []

  constructor(private noticiasService:NoticiasService, private authSvc: AuthService) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp=> {
      console.log('noticias', resp);
       //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio.
      this.noticias.push(...resp.results);
    });
  }
}
