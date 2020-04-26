import { Component, Inject } from '@angular/core';
import {
  Event,
  Router,
  NavigationStart,
  NavigationEnd,
  RouterEvent
} from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { WEB3 } from './etherum/web3';
import Web3 from 'web3';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LoggeduserService } from './shared/services/loggeduser.service';
import { Roles } from './shared/models/enums.enum';
import { ContractsService } from './contracts/contracts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUrl: string;
  showLoadingIndicatior = true;

  constructor(public _router: Router, location: PlatformLocation, @Inject(WEB3) private web3: Web3, private deviceService: DeviceDetectorService,
  private loggedUser: LoggeduserService, private contractService: ContractsService) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicatior = true;
        location.onPopState(() => {
          window.location.reload();
        });
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicatior = false;
      }
      window.scrollTo(0, 0);
    });
  }

  async ngOnInit() {

    let browser = this.deviceService.getDeviceInfo().browser;

    console.log(browser);

    if ((browser.includes('Chrome')) || (browser.includes('Firefox')) || (browser.includes('Opera')) || (browser.includes('MS-Edge-Chromium'))){
      if (!this.contractService.existProvider()) {
        this._router.navigate(['/errors/etherum-config']);
        return;
      }
    }
    else {
      this._router.navigate(['/errors/browser-unsupported']);
      return;
    }
    //Temporal view
    this.loggedUser.setUserLoggedIn({username: 'Alison', rol: Roles.admin, useraddress: '', none: ''});

    //const accounts = await this.web3.eth.getAccounts();

    //this.web3.eth.personal.sign(this.web3.utils.fromUtf8("Hola"), accounts[0].toString(), 'prueba', (data) => {console.log(data)});

    //Existen cuentas disponibles en metamask
    /*if (accounts.length > 0){
      this.loggedUser.setUserLoggedIn({username: accounts[0].toString(), rol: Roles.admin});
      this._router.navigate(['/dashboard/main']);
      console.log(`El usuario: ${JSON.stringify(this.loggedUser.getUserLoggedIn())} entró`);
    } else {
      console.log(`No Accounts: ${accounts}`);
    }
    */
    //this._router.navigate(['/authentication/signin']);

  }

}
