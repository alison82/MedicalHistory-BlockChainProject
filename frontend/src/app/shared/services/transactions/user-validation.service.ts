import { Injectable } from '@angular/core';
import { ContractsService } from '../../../contracts/contracts.service';
import { Roles, Contracts} from '../../models/enums.enum'

@Injectable({
  providedIn: 'root'
})
export class UservalidationService {

  private rolContract: any

  constructor(private contractIntance: ContractsService) {  
    this.rolContract = contractIntance.getContract(Contracts.UserRoles);
  }

  getUserType(address): Promise<any>{
    let rol:any;
    if (this.isAdmin(address)) {
      console.log("Is Admin");
      rol = Roles.admin;
    }
    else if (this.isDoctor(address)){
      console.log("Is a Doctor!!!!");
      rol = Roles.doctor;
    }
    else if (this.isPatient(address)){
      console.log("Is a Patient!!!!");
      rol = Roles.patient;
    }
    else{
      rol = Roles.none;
    }
    return rol;
  }


  private isDoctor(address): Promise<boolean>{
    return this.rolContract.isMedic(address,{from: address});
  }

  private isAdmin(address): Promise<boolean>{
    return this.rolContract.isMedic(address,{from: address});
  }

  private isPatient(address): Promise<boolean>{
    return this.rolContract.isMedic(address,{from: address});
  }


}
