import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Web3 from 'web3';
import { SigninService } from '../signin/signin.service';
import { WEB3 } from 'src/app/etherum/web3';
import { ContractsService } from 'src/app/contracts/contracts.service';
import { Contracts, Roles } from 'src/app/shared/models/enums.enum';

import * as cj from 'circular-json';
import { Doctor } from 'src/app/shared/models/doctor.model';
import { LoggeduserService } from 'src/app/shared/services/loggeduser.service';
import { User } from 'src/app/shared/models/user.model';
import { Patient } from 'src/app/shared/models/patient.model';
import { DoctorService } from 'src/app/shared/services/transactions/doctor.service';
import { PatientService } from 'src/app/shared/services/transactions/patient.service';

declare const $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [DoctorService,PatientService]
})
export class SignupComponent implements OnInit {
  IPFS = require('ipfs-mini');
  ipfs = new this.IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  doctor: Doctor;
  patient: Patient;
  type: string;
  id: string;
  isDoctor: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(WEB3) private web3: Web3,
    public signinService: SigninService,
    private contractService: ContractsService,
    private loggedUser: LoggeduserService,
    private siginService: SigninService,
    private doctorService: DoctorService,
    private patientService: PatientService
  ) {
    this.type = `Register ${siginService.getRol().toString()}`;
    this.isDoctor = false;
    console.log("This is the rol: "+siginService.getRol().toString());
    //Configurar variables segun el tipo de rol que se desea crear
    switch (this.siginService.getRol()) {
      case Roles.doctor:
        this.id = 'Cedula';
        this.isDoctor = true;
        break;

      case Roles.patient:
        this.id = 'Curp';
        break;

      default:
        break;
    }

  }

  ngOnInit() {
    //Inicializar compontente
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      secondname: ['', Validators.required],
      specialty: [''],
      id: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      address:[this.contractService.getCurrentAddress()],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //    [Focus input] * /
    $('.input100').each(function() {
      $(this).on('blur', function() {
        if (
          $(this)
            .val()
            .trim() != ''
        ) {
          $(this).addClass('has-val');
        } else {
          $(this).removeClass('has-val');
        }
      });
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log("On submit");
    this.submitted = true;
    // stop here if form is invalid
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      return;
    }
    else {
      console.log(`El rol predomintante es: ${this.siginService.getRol()}`);

      switch (this.siginService.getRol()) {
        case Roles.doctor:
          this.addDoctor();
          this.router.navigate(['/authentication/doctor-successful-creation']);
          break;

        case Roles.patient:
          console.log("Soy paciente");
          this.addPatient();
          //Esperar aceptacion de la cuenta


          this.router.navigate(['/dashboard/main']);
          break;

        default:
          break;
      }
    }
  }

  async sendToIPFS(){
    return this.ipfs.addJSON(this.loginForm.value);
  }

  async addDoctor(){
    let doctor = new Doctor();
    doctor.address = await this.contractService.getCurrentAddress();
    doctor.name = this.loginForm.value.name;
    doctor.surname = this.loginForm.value.surname;
    doctor.secondname = this.loginForm.value.secondname;
    doctor.cedula = this.loginForm.value.id;
    doctor.email = this.loginForm.value.email;
    doctor.hashPicture = '';
    doctor.specialty = this.loginForm.value.specialty;
    doctor.user = new User();
    doctor.user.useraddress = doctor.address ;
    doctor.user.username = '';
    doctor.user.rol = Roles.doctor.toString();

    var hashString = await this.sendToIPFS();
    await this.doctorService.register(hashString, doctor.address).then(res=>{
      console.log("RegisteredX2!!!!!!")
    },error=>{
      console.log(error);
    });

  }

  async addPatient(){
    //const contractInstance = await this.contractService.getContract(Contracts.AssistantRegister);

    const address = await this.contractService.getCurrentAddress();

    console.log(`Address here: ${address}`)

    let patient = new Patient();
    patient.address = address;
    patient.name = this.loginForm.value.name + " "+this.loginForm.value.surname+ " " +this.loginForm.value.secondname;
    patient.surname = this.loginForm.value.surname;
    patient.secondname = this.loginForm.value.secondname;
    patient.curp = this.loginForm.value.id;
    patient.email = this.loginForm.value.email;
    patient.hashPicture = '0xB9771F330c261083a40DC8A230976622A911126e126e';
    patient.hashCredential = '0xB9771F330c261083a40DC8A230976622A911126e126e';
    patient.bloodType="O+";
    patient.user = new User();
    patient.user.useraddress = address;
    patient.user.username = this.loginForm.value.name ;
    patient.user.rol = Roles.patient.toString();
    patient.gender="M";

    console.log(`Hasta aqui: ${patient.name}`)
    await this.patientService.register(patient).then(res=>{
      console.log("Registered Patient!!!!!!")
    },error=>{
      console.log(error);
    });

    this.loggedUser.setUserLoggedIn(patient.user);
    //contractInstance.addAssistant('0x9847BCe3b39C5E9e9137532dd77d2F9E11859C37', patient.name, patient.surname, patient.secondname, patient.curp, patient.hashPicture, { from: patient.user.useraddress});
  }
}
