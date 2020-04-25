import { User } from './user.model';
import { Roles } from './enums.enum';
import { Person } from './person.model';

export class Doctor extends Person{

  specialty: string;
  cedula: string;

  /*designation: string;
  department: string;
  address: string;
  education: string;

  user: User;

  constructor(){
    this.user.rol = Roles.none_doctor;
  }*/
}
