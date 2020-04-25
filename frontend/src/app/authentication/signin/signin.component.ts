import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Web3 from 'web3';
import { WindowScrollController } from '@fullcalendar/core';

import {LoggeduserService} from 'src/app/shared/services/loggeduser.service';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { WEB3 } from 'src/app/etherum/web3';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { User } from 'src/app/shared/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { SelectDialogComponent } from './dialogs/select-dialog/select-dialog.component';
import { SigninService } from './signin.service';
import { Roles } from 'src/app/shared/models/enums.enum';
import { ContractsService } from 'src/app/contracts/contracts.service';

declare const $: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;

  @ViewChild(ToastContainerDirective, {static: true}) toastContainer: ToastContainerDirective;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private window: Window,
    private loggedUser: LoggeduserService,
    private toastrService: ToastrService,
    @Inject(WEB3) private web3: Web3,
    public dialog: MatDialog,
    public signinService: SigninService,
    private contractService: ContractsService
  ) {}
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
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

    this.toastrService.overlayContainer = this.toastContainer;
  }
  get f() {
    return this.loginForm.controls;
  }
  async onSubmit() {
    this.submitted = true;


    const accounts = await this.web3.eth.getAccounts();


    const publicAddress: string = accounts[0];

    console.log(`publicAddress: ${publicAddress}`);

    //Code to get none value
    const none: string = 'Hola';

    await this.web3.eth.personal.sign(this.web3.utils.fromUtf8(none), publicAddress, '', (err, signature) => {
      if (err){
        console.log(`Metamask error: ${err.message}`);
        this.toastrService.error(err.message, 'Access');
        return;
      }
      console.log(`login with: ${signature}`);
    });

    //const token: any =  this.web3.eth.Contract()

    //If the user exist in the system, got to dashboard

      //Else, create user

      const dialogRef = this.dialog.open(SelectDialogComponent, {
      });

      await dialogRef.afterClosed()
        .toPromise()
        .then(result => {
          console.log("The dialog was closed " + result);
        });

        const user: User ={
          username: '',
          useraddress: publicAddress,
          rol: Roles.none
        };


        const selected = this.signinService.getRol();

        switch (selected) {
          case Roles.doctor:
            user.rol = Roles.none_doctor;

            //this.router.navigate(['/doctors/add-doctor']);

            break;

          case Roles.patient:

            user.rol = Roles.none_patient;

            //this.router.navigate(['/patient/add-patient']);


            break;

          default:
            break;
        }

        //this.loggedUser.setUserLoggedIn(user);

        this.router.navigate(['/authentication/signup']);


      /*await dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          console.log('Se realizó');
        }
      });*/


    //this.loggedUser.setUserLoggedIn({username: publicAddress, rol: Roles.admin});


    //Existen cuentas disponibles en metamask
    /*if (accounts.length > 0){
      this.loggedUser.setUserLoggedIn({username: accounts[0].toString(), rol: Roles.admin});
      this._router.navigate(['/dashboard/main']);
      console.log(`El usuario: ${JSON.stringify(this.loggedUser.getUserLoggedIn())} entró`);
    }*/

    // stop here if form is invalid
    /*if (this.loginForm.invalid) {
      console.log('Invalid data');
      //this.toastrService.warning('');
      return;
    } else {
      if (this.loggedUser.userLogged){
        this.router.navigate(['/dashboard/main']);
      }
      this.toastrService.error('Invalid username-password', 'Access');
      return;
    }*/
  }

  async selectCall() {

  }
}
