export enum Roles {
  admin = "admin",
  doctor = "doctor"
}

export class User {
  username: string;
  rol: Roles;
}
