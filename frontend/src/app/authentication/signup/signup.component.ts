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
import { Patient } from 'src/app/patient/allpatient/patient.model';
import { LoggeduserService } from 'src/app/shared/services/loggeduser.service';
import { User } from 'src/app/shared/models/user.model';

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
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(WEB3) private web3: Web3,
    public signinService: SigninService,
    private contractService: ContractsService,
    private loggedUser: LoggeduserService
  ) {}
  ngOnInit() {

    this.addDoctor();

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
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
      this.router.navigate(['/dashboard/main']);
    }
  }

  async addDoctor(){
    const contractInstance = await this.contractService.getContract(Contracts.MedicsRegister);

    const address = await this.contractService.getCurrentAddress();

    console.log(`Address here: ${address}`)

    let doctor = new Doctor();
    doctor.address = '';
    doctor.firstname = 'Alison';
    doctor.cedula = 'Yes';
    doctor.email = 'alison.capote@gmail.com';
    doctor.hashPicture = '';
    doctor.specialty = '';
    doctor.user = new User();
    doctor.user.useraddress = address;
    doctor.user.username = 'alison';
    doctor.user.rol = Roles.doctor.toString();

    console.log(`Hasta aqui: ${doctor.user.useraddress}`)

    contractInstance.addMedics(doctor.address, doctor.firstname, doctor.specialty, doctor.cedula, doctor.email, doctor.hashPicture, { from: doctor.user.useraddress});

  }
}
