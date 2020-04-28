import { Injectable } from '@angular/core';
import { Roles } from 'src/app/shared/models/enums.enum';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  rol: Roles;
  constructor() { }

  setRol(rol: Roles){
    this.rol = rol;
  }

  getRol(){
    return this.rol;
  }

}
