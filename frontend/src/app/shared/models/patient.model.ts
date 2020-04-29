import { Person } from './person.model';

export class Patient extends Person{
  curp: string;
  gender: string;
  hashCredential: string;
  bloodType: string;
}
