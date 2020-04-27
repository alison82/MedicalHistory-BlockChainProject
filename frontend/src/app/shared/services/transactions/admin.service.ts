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
  }

  async addDoctor(doctor: Doctor, address): Promise<any>{
    this.doctorContract = await this.contractInstance.getContract(Contracts.MedicsRegister);
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

  async updateDoctor(doctor): Promise<any>{
    let current = new Date();
    let timestamp = current.getTime();
    this.doctorContract = await this.contractInstance.getContract(Contracts.MedicsRegister);
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
    return Number(this.registerContract.getPendingLength(
      {
        from: this.contractInstance.getCurrentAddress()
      }
    ).toFixed());
  }

  async getHash(position): Promise<any>{
    return this.registerContract.getPendingRequest(
      position,
      {
        from: this.contractInstance.getCurrentAddress()
      }
    );
  }

  private getDoctorData(hashString): Doctor{
    var json = this.ipfs.catJSON(hashString);
    return JSON.parse(json);
  }

  async getPendingRequest():Promise<Doctor[]>{
    this.registerContract = await this.contractInstance.getContract(Contracts.PendingRecords);
    var arraySize = await this.getSize();
    console.log(arraySize);
    let doctor_list : Doctor[] = [];
    for (let i = 0; i < arraySize; i++) {
      var current_doctor = new Doctor;
      var hash_String = await this.getHash(i);
      current_doctor= await this.getDoctorData(hash_String);
      console.log(current_doctor);
      doctor_list.push(current_doctor);
    }
    console.log(doctor_list);
    return doctor_list;
  }

}
