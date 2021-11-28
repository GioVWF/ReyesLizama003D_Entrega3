import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  id: number;
  nombre: String;
  apellido: String;
  edad: number;
  correo: String;
  Contrasenna: String;
  modified: number;
}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class LogindatosService {

  private _storage : Storage;

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  addUsuario(usuario : Usuario):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((usuarios : Usuario[])=>{
      if (usuarios){
        usuarios.push(usuario);
        return this.storage.set(ITEMS_KEY, usuarios);
      }else {
        return this.storage.set(ITEMS_KEY, [usuario]);
      }      
    })
  }
  getUsuario(): Promise<Usuario[]>{
    return this.storage.get(ITEMS_KEY);
  }
  updateUsuario(usuario: Usuario):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((usuarios : Usuario[])=>{
      if (!usuarios || usuarios.length ==0){
        return null;
      }
      let newUsuario: Usuario[] = [];
      for (let i of usuarios){
        if (i.id == usuario.id){
          newUsuario.push(usuario);
        }
        else{
          newUsuario.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newUsuario);
    })
  }
  deleteUsuario(id: number): Promise<Usuario>{
    return this.storage.get(ITEMS_KEY).then((usuarios: Usuario[])=>{
      if (!usuarios || usuarios.length == 0){
        return null;
      }
      let toKeep: Usuario[] = [];
      for (let i of usuarios){
        if (i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }  
}

