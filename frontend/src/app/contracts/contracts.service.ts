import { Injectable, Inject } from '@angular/core';

import { WEB3 } from '../etherum/web3';
import Web3 from 'web3';
import { ContactGridComponent } from '../apps/contact-grid/contact-grid.component';

//import * as contract from 'truffle-contract';
let contract = require('truffle-contract');

//import * as medicsregisterContract from './MedicsRegister.json';
let medicsregisterContract = require('./MedicsRegister.json');

import * as migrationsContract from './Migrations.json';
import * as patientdiagnosisContract from './PatientDiagnosis.json';

import * as userRolesContract from './UserRoles.json';

import { Contracts, Roles } from '../shared/models/enums.enum';
import * as pendingRecords from './PendingRecords.json';
const abiPendingRecords = require('./PendingRecords.json'); // compiled contracts
const abiPatienDiagnosis = require('./PatientDiagnosis.json'); // compiled contracts
//import * as cj from 'circular-json';
//import { ConsoleReporter } from 'jasmine';


@Injectable({
  providedIn: 'root'
})



export class ContractsService {

  constructor(
    @Inject(WEB3) private web3: Web3
  ) { }

  async existProvider(){
    if (this.web3.currentProvider) {
      return true;
    }
    return false;
  }

  async getCurrentAddress(){
    const accounts = await this.web3.eth.getAccounts();
    return accounts[0];
  }

  async getAccountInfo() {
    return new Promise((resolve, reject) => {
      this.web3.eth.getCoinbase((err, account) => {
        if(err === null) {
          this.web3.eth.getBalance(account, (err, balance) => {
            if(err === null) {
              return resolve({fromAccount: account, balance: this.web3.utils.fromWei(balance, "ether")});
            } else {
              return reject("error!");
            }
          });
        }
      });
    });
  }

  async getUserNonebyAddress(address){
    // Verificar con un contrato si este usuario se encuentra ya registrado y devolver el none correspondiente
  }

  async getUserInfobyAddress(address, none){
  // Verificar con un contrato si este usuario se encuentra ya registrado

  //Este codigo es temporal
  return {
    username: '',
    useraddress: address,
    rol: Roles.none.toString(),
    none : none
  }
  }

  async addDoctor(){

  }

  async getContract(cont: Contracts): Promise<any>{
    let ngoContract: any;

    switch (cont) {
      case Contracts.AssistantRegister:
        ngoContract = contract(abiPatienDiagnosis);
        break;

      case Contracts.MedicsRegister:
        ngoContract = contract(abiPatienDiagnosis);

        break;

      case Contracts.Migrations:
        ngoContract = contract(migrationsContract);
        break;

      case Contracts.PatientDiagnosis:
        ngoContract = contract(abiPatienDiagnosis);
        break;

      case Contracts.UserRoles:
        ngoContract = contract(abiPatienDiagnosis);
        break;

      case Contracts.PendingRecords:
        ngoContract = contract(abiPendingRecords);
        break;
        
      default:
        break;
    }
    ngoContract.setProvider(this.web3.currentProvider);

    //try {
        console.log(cont);
        const ngoInstance = await ngoContract.deployed();
        console.log(ngoInstance);
        return ngoInstance;
    //} catch (error) {
    //    console.log(Contracts.PendingRecords);
    //    console.log(error);
    //    throw new Error('Contract has not been deployed to network.');
    //}
  }

}
