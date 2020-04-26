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

declare const $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
    private siginService: SigninService
  ) {
    this.type = `Register ${siginService.getRol().toString()}`;
    this.isDoctor = false;

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
      speciality: ['', Validators.required],
      id: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ]
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
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      switch (this.siginService.getRol()) {
        case Roles.doctor:
          this.addDoctor();
          break;

        case Roles.patient:
          this.addPatient();
          break;

        default:
          break;
      }
      this.router.navigate(['/dashboard/main']);
    }
  }

  async addDoctor(){
    const contractInstance = await this.contractService.getContract(Contracts.MedicsRegister);

    const address = await this.contractService.getCurrentAddress();

    console.log(`Address here: ${address}`)

    let doctor = new Doctor();
    doctor.address = '';
    doctor.name = this.loginForm.value.fullname;
    doctor.surname = this.loginForm.value.surname;
    doctor.secondname = this.loginForm.value.secondname;
    doctor.cedula = this.loginForm.value.id;
    doctor.email = this.loginForm.value.email;
    doctor.hashPicture = '';
    doctor.specialty = this.loginForm.value.specialty;
    doctor.user = new User();
    doctor.user.useraddress = address;
    doctor.user.username = '';
    doctor.user.rol = Roles.doctor.toString();

    console.log(`Hasta aqui: ${doctor.name}`)

    contractInstance.addMedics('0x9847BCe3b39C5E9e9137532dd77d2F9E11859C37', doctor.name, doctor.specialty, doctor.cedula, doctor.email, doctor.hashPicture, { from: doctor.user.useraddress});

  }

  async addPatient(){
    const contractInstance = await this.contractService.getContract(Contracts.AssistantRegister);

    const address = await this.contractService.getCurrentAddress();

    console.log(`Address here: ${address}`)

    let patient = new Patient();
    patient.address = '';
    patient.name = this.loginForm.value.fullname;
    patient.surname = this.loginForm.value.surname;
    patient.secondname = this.loginForm.value.secondname;
    patient.curp = this.loginForm.value.id;
    patient.email = this.loginForm.value.email;
    patient.hashPicture = '';
    patient.user = new User();
    patient.user.useraddress = address;
    patient.user.username = '';
    patient.user.rol = Roles.patient.toString();

    console.log(`Hasta aqui: ${patient.name}`)

    contractInstance.addAssistant('0x9847BCe3b39C5E9e9137532dd77d2F9E11859C37', patient.name, patient.surname, patient.secondname, patient.curp, patient.hashPicture, { from: patient.user.useraddress});
  }
}
