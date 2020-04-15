import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Web3 from 'web3';
import { WindowScrollController } from '@fullcalendar/core';

import {LoggeduserService} from 'src/app/shared/services/loggeduser.service';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { NONE_TYPE } from '@angular/compiler';
import { WEB3 } from 'src/app/etherum/web3';

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
    @Inject(WEB3) private web3: Web3
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
  onSubmit() {
    this.submitted = true;

    //this.web3.eth.personal.sign(null, this.web3.eth.getCoinbase());

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('Invalid data');
      //this.toastrService.warning('');
      return;
    } else {
      if (this.loggedUser.userLogged){
        this.router.navigate(['/dashboard/main']);
      }
      this.toastrService.error('Invalid username-password', 'Access');
      return;
    }
  }

}
