import { Injectable } from '@angular/core';
import { ContractsService } from '../../../contracts/contracts.service';
import {  Contracts} from '../../models/enums.enum'
import { Doctor } from '../../models/doctor.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  doctorContract: any;

  constructor(private contractInstance: ContractsService) {
    this.doctorContract = contractInstance.getContract(Contracts.MedicsRegister);
  }

  addDoctor(doctor: Doctor, address): Promise<any>{
    return this.doctorContract.addMedics({
                                    _account:     doctor.address,
                                    _name:        doctor.name,
                                    _specialty:   doctor.specialty,
                                    _cedula:      doctor.cedula,
                                    _email:       doctor.email,
                                    _hashPicture: doctor.hashPicture
                                  },
                                  { from:address });
  }

  updateDoctor(doctor,address): Promise<any>{
    let current = new Date();
    let timestamp= current.getTime();
    return this.doctorContract.updateMedics({
                                    _account:     doctor.address,
                                    _name:        doctor.name,
                                    _specialty:   doctor.especiality,
                                    _cedula:      doctor.cedula,
                                    _email:       doctor.email,
                                    _hashPicture: doctor.hashPicture,
                                    _date:        timestamp
                                  },
                                  { from:address });
  }

 // getPendingRecords(): Promise<any>{

 // }

  // TODO: Falta devolver la lista de registros pendiente por aprobación
}
