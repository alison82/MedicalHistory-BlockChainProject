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
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private loggedUser: LoggeduserService,
    @Inject(WEB3) private web3: Web3,
    public dialog: MatDialog,
    public signinService: SigninService,
    private contractService: ContractsService,
    //private snackBar: MatSnackBar
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
  }
  get f() {
    return this.loginForm.controls;
  }
  async onSubmit() {
    this.submitted = true;


    //const accounts = await this.web3.eth.getAccounts();


    //const publicAddress: string = accounts[0];

    const publicAddress = (await this.contractService.getCurrentAddress());

    if (!publicAddress){
      console.log('Debe loguearse');
      return;

      /*this.showNotification(
        'snackbar-error',
        'You must login in metamask!!',
        'bottom',
        'center'
      );*/
    }

    //Verificar si la direccion se encuentra registrada

    //if (this.contractService.)

    console.log(`publicAddress: ${publicAddress}`);

    const none = this.contractService.getUserNonebyAddress(publicAddress);

      //Code to get none value
    const info: string = 'We are getting your public address to access to the system. Are you agree?';

    await this.web3.eth.personal.sign(this.web3.utils.fromUtf8(info), publicAddress, '', (err, signature) => {
        if (err){
          console.log(`Metamask error: ${err.message}`);
          return;
        }
        console.log(`login with: ${signature}`);
    });

    let user: User = await this.contractService.getUserInfobyAddress(publicAddress, none);

    //Varificar el rol del usuario para enviarlo a su vista correspondiente

    if ((user.rol === Roles.admin) || ((user.rol === Roles.admin))){
      //Registrar login

      //Ir a la vista correspondiente
      this.router.navigate(['/dashboard/main']);
    }



    const dialogRef = this.dialog.open(SelectDialogComponent, {
    });

    await dialogRef.afterClosed()
      .toPromise()
      .then(result => {
        console.log("The dialog was closed " + result);
    });

    const selected = this.signinService.getRol();

    switch (selected) {
      case Roles.doctor:
        user.rol = Roles.none_doctor;
        break;

      case Roles.patient:
        user.rol = Roles.none_patient;
        break;

      default:
        break;
    }

    //Ir al Registro del usuario
    this.router.navigate(['/authentication/signup']);
  }

  async selectCall() {

  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    /*this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName
    });*/
  }
}
