import { Injectable } from '@angular/core';
import { ContractsService } from '../../../contracts/contracts.service';
import {  Contracts} from '../../models/enums.enum';
import {  Patient } from '../../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientContract: any;
  constructor(private contractInstance: ContractsService) { 
    
  }

/*
        string memory _nombre,
        string memory _curp,
        string memory _tipoSangre,
        string memory _sexo,
        string memory _hashCredencial,
        string memory _hashFoto
        )
*/

  public async register(patient: Patient): Promise<any>{
    this.patientContract = await this.contractInstance.getContract(Contracts.PatientDiagnosis);
    return this.patientContract.patientSelfReg(
      patient.name,
      patient.curp,
      patient.bloodType,
      patient.gender,
      patient.hashCredential,
      patient.hashPicture,
      { 
        from: patient.address,
        value: 50000000000000000
      }
    );
  }

  // Return the list of time stamps
  getDiagnoseList(address): Promise<any>{
    this.patientContract = this.contractInstance.getContract(Contracts.PatientDiagnosis);
    return this.patientContract.extendedViewDiagnostic(address,{
                                                                  from: address
                                                                }
                                                      );
  }

  getDiagnosis(address): Promise<any>{
    this.patientContract = this.contractInstance.getContract(Contracts.PatientDiagnosis);
    let current = new Date();
    let timestamp= current.getTime();
    return this.patientContract.viewDiagnostic(
                                                  address,
                                                  timestamp
                                                ,{from: address});

                                                // TODO: Revisar como se devuelven los datos
  }

}
