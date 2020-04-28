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
    return this.registerContract.getPendingLength();
  }

  private async getHash(position): Promise<any>{
    return this.registerContract.getPendingRequest(position);
  }

  private getDoctorData(hashString): Doctor{
    return this.ipfs.catJSON(hashString);
    //console.log(json);
    //return JSON.parse(json);
  }

  async getPendingRequest():Promise<Doctor[]>{
    this.registerContract = await this.contractInstance.getContract(Contracts.PendingRecords);
    var arraySize = await this.getSize();
    arraySize=arraySize.toString();
    console.log(arraySize);
    let doctor_list : Doctor[] = [];
    for (let i = 0; i < Number(arraySize); i++) {
      var current_doctor = new Doctor;
      var hash_String = await this.getHash(i);
      var json= await this.getDoctorData(hash_String);
      //console.log(json);
      current_doctor.name = json.name;
      current_doctor.surname = json.surname;
      current_doctor.secondname = json.secondname;
      current_doctor.email = json.email;
      current_doctor.address = json.address;
      current_doctor.specialty = json.specialty;
      current_doctor.cedula = json.cedula;

      doctor_list.push(current_doctor);
    }
    console.log(doctor_list);
    return doctor_list;
  }

}


/*

*/