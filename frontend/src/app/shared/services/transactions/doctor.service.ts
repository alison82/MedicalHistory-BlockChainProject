import { Injectable } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { Diagnosis } from '../../models/diagnosis.model';
import { ContractsService } from '../../../contracts/contracts.service';
import {  Contracts} from '../../models/enums.enum'



@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorContract: any;
  diagnosisContract: any;
  registerContract: any;

  constructor(private contractInstance: ContractsService) {
    
    this.diagnosisContract = contractInstance.getContract(Contracts.PatientDiagnosis);
    
  }

  async register(hashString, address): Promise<any>{
  
    // Send to blockchain
    this.registerContract = await this.contractInstance.getContract(Contracts.PendingRecords);
    console.log(hashString);
    return this.registerContract.addMedicRecord(
      hashString,
      {
        from: address
      }
    ).then(res=>{
      console.log("Registered!!!!!!")
    },error=>{
      console.log(error);
    });
  }

  /************************************* Returns doctor's data ********************************/
  async getDoctorData(address): Promise<any>{
    let _doctor: any;
    let current = new Date();
    let _timestamp= current.getTime();
    this.doctorContract =  await this.contractInstance.getContract(Contracts.MedicsRegister);
    _doctor= this.doctorContract.viewMedics(address,
                                            _timestamp,
                                            {from: address});

      // TODO: Revisar como se regresan los datos del contrato
      return _doctor;
  }

  /* Definici+on del contrato:
      function viewMedics(address _account, uint256 _date) public nonlyStopped onlyAdmin returns (
        string memory name,
        string memory specialty,
        string memory cedula,
        string memory email,
        string memory hashPicture)
  */

  /******************************Actions related with patient*********************************/
  async setDiagnostic(diagnostic: Diagnosis): Promise<any>{
    this.doctorContract =  await this.contractInstance.getContract(Contracts.MedicsRegister);
    return this.diagnosisContract.addDiagnostic(
                                                      diagnostic.address_patient,
                                                      diagnostic.address_doctor,
                                                      diagnostic.name,
                                                      diagnostic.last_name,
                                                      diagnostic.last_name_2,
                                                      diagnostic.comorb,
                                                      diagnostic.age,
                                                      diagnostic.weigth,
                                                      diagnostic.description,
                                                      diagnostic.observations,
                                                      diagnostic.files
                                                    ,{ from: diagnostic.address_doctor }
      );
  }

  async updateDiagnostic(diagnostic: Diagnosis): Promise<any>{
    let current = new Date();
    let timestamp= current.getTime();
    this.doctorContract =  await this.contractInstance.getContract(Contracts.MedicsRegister);
    return this.diagnosisContract.updateDiagnostic(
                                                      diagnostic.address_patient,
                                                      diagnostic.name,
                                                      diagnostic.last_name,
                                                      diagnostic.last_name_2,
                                                      diagnostic.comorb,
                                                      diagnostic.age,
                                                      diagnostic.weigth,
                                                      diagnostic.description,
                                                      diagnostic.observations,
                                                      diagnostic.files,
                                                      timestamp
                                                    ,{ from: diagnostic.address_doctor }
      );
  }


}