import { Injectable, Inject } from '@angular/core';

import { WEB3 } from '../etherum/web3';
import Web3 from 'web3';
import { ContactGridComponent } from '../apps/contact-grid/contact-grid.component';

//import * as contract from 'truffle-contract';
let contract = require('truffle-contract');

import * as assistantregisterContract from './AssistantRegister.json';

//import * as medicsregisterContract from './MedicsRegister.json';
let medicsregisterContract = require('./MedicsRegister.json');

import * as migrationsContract from './Migrations.json';
import * as patientdiagnosisContract from './PatientDiagnosis.json';

import { Contracts } from '../shared/models/enums.enum';

import * as cj from 'circular-json';
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
    return accounts[0].toString();
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

  async addDoctor(){

  }

  async getContract(cont: Contracts): Promise<any>{


    let ngoContract: any;

    switch (cont) {
      case Contracts.AssistantRegister:
        ngoContract = contract(assistantregisterContract);
        break;

      case Contracts.MedicsRegister:
        ngoContract = contract(medicsregisterContract);

        break;

      case Contracts.Migrations:
        ngoContract = contract(migrationsContract);
        break;

      case Contracts.PatientDiagnosis:
        ngoContract = contract(patientdiagnosisContract);
        break;

      default:
        break;
    }

    ngoContract.setProvider(this.web3.currentProvider);

    try {
        const ngoInstance = await ngoContract.deployed();
        return ngoInstance;
    } catch (error) {
        console.log(error);
        throw new Error('Contract has not been deployed to network.');
    }
  }
}
