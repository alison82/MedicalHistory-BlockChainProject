import { Injectable } from '@angular/core';
import { ContractsService } from '../../../contracts/contracts.service';
import {  Contracts} from '../../models/enums.enum'
import { Doctor } from '../../models/doctor.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  IPFS = require('ipfs-mini');
  ipfs = new this.IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
  doctorContract: any;
  registerContract: any;

  constructor(private contractInstance: ContractsService) {
    this.doctorContract = contractInstance.getContract(Contracts.MedicsRegister);
    this.registerContract = contractInstance.getContract(Contracts.PendingRecords);
  }

  addDoctor(doctor: Doctor, address): Promise<any>{

    return this.doctorContract.addMedics(
                                    doctor.address,
                                    doctor.name,
                                    doctor.specialty,
                                    doctor.cedula,
                                    doctor.email,
                                    doctor.hashPicture
                                  ,
                                  { from:address });
  }

  updateDoctor(doctor): Promise<any>{
    let current = new Date();
    let timestamp = current.getTime();
    return this.doctorContract.updateMedics(
                                    doctor.address,
                                    doctor.name,
                                    doctor.especiality,
                                    doctor.cedula,
                                    doctor.email,
                                    doctor.hashPicture,
                                    timestamp
                                  ,
                                  { from: doctor.address });
  }

  private getSize(){
    return this.registerContract.getPendingLength(
      {
        from: this.registerContract.account
      }
    ).words[0];
  }

  private getHash(position){
    return this.registerContract.getPendingRequest(
      position,
      {
        //from: this.web3Service.account TODO: Preguntarle a alison como usar la cuenta
      }
    );
  }

  private getDoctorData(hashString): Doctor{
    var json = this.ipfs.catJSON(hashString).then().catch(console.log);
    return JSON.parse(json);
  }

  getPendingRequest(): Array<Doctor>{
    var arraySize = this.getSize();
    let doctor_list : Array<Doctor> = new Array();
    for (let i = 0; i < arraySize; i++) {
      var current_doctor = new Doctor;
      var hash_String = this.getHash(i);
      current_doctor=this.getDoctorData(hash_String);
      doctor_list.push(current_doctor);
    }
    return doctor_list;
  }

}
