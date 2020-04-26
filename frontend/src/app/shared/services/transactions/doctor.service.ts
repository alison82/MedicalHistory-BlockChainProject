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

  constructor(private contractInstance: ContractsService) { 
    this.doctorContract = contractInstance.getContract(Contracts.MedicsRegister);
    this.diagnosisContract = contractInstance.getContract(Contracts.PatientDiagnosis);
  }

  /************************************* Returns doctor's data ********************************/
  getDoctorData(address): Promise<any>{
    let _doctor: any;
    let current = new Date();
    let _timestamp= current.getTime();
    _doctor= this.doctorContract.viewMedics({_account: address, 
                                             _date:_timestamp},
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
  setDiagnostic(diagnostic: Diagnosis): Promise<any>{

    return this.diagnosisContract.addDiagnostic({
                                                      _patient: diagnostic.address_patient,
                                                      _medic: diagnostic.address_doctor,
                                                      _nombre: diagnostic.name,
                                                      _aPat: diagnostic.last_name,
                                                      _aMat: diagnostic.last_name_2,
                                                      _comorb: diagnostic.comorb,
                                                      _age: diagnostic.age,
                                                      _weigth: diagnostic.weigth,
                                                      _diagnostic: diagnostic.description,
                                                      _obsevations: diagnostic.observations,
                                                      _estudio: diagnostic.files
                                                    },{ from: diagnostic.address_doctor }
      );
  }

  updateDiagnostic(diagnostic: Diagnosis): Promise<any>{
    let current = new Date();
    let timestamp= current.getTime();
    return this.diagnosisContract.updateDiagnostic({
                                                      _patient: diagnostic.address_patient,
                                                      _nombre: diagnostic.name,
                                                      _aPat: diagnostic.last_name,
                                                      _aMat: diagnostic.last_name_2,
                                                      _comorb: diagnostic.comorb,
                                                      _age: diagnostic.age,
                                                      _weigth: diagnostic.weigth,
                                                      _diagnostic: diagnostic.description,
                                                      _obsevations: diagnostic.observations,
                                                      _estudio: diagnostic.files,
                                                      _date: timestamp
                                                    },{ from: diagnostic.address_doctor }
      );
  }


}
