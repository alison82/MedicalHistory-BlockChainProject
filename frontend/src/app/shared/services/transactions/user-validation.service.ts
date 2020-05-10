import { Injectable } from '@angular/core';
import { ContractsService } from '../../../contracts/contracts.service';
import { Roles, Contracts} from '../../models/enums.enum'

@Injectable({
  providedIn: 'root'
})
export class UservalidationService {

  private rolContract: any

  constructor(private contractIntance: ContractsService) {
  }

  async getUserType(address): Promise<any>{
    this.rolContract = this.contractIntance._getContract();
    console.log(this.rolContract);

    let rol:any;
    if (await this.rolContract.isAdmin(address)) {
      console.log("Is Admin");
      rol = Roles.admin;
    }
    else if (await this.rolContract.isMedic(address)){
      console.log("Is a Doctor!!!!");
      rol = Roles.doctor;
    }
    else if (await this.rolContract.isPatient(address)){
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
    return this.rolContract.isAdmin(address,{from: address});
  }

  private isPatient(address): Promise<boolean>{
    return this.rolContract.isPatient(address,{from: address});
  }


}
