import { Injectable } from '@angular/core';
import { ContractsService } from '../../../contracts/contracts.service';
import {  Contracts} from '../../models/enums.enum'

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientContract: any;
  constructor(private contractInstance: ContractsService) { 
    this.patientContract = contractInstance.getContract(Contracts.PatientDiagnosis);
  }

  getDiagnosis(address): Promise<any>{
    let current = new Date();
    let timestamp= current.getTime();
    return this.patientContract.viewDiagnostic({
                                                  _account: address,
                                                  _date: timestamp
                                                },{from: address});

                                                // TODO: Revisar como se devuelven los datos
  }

}
