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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUrl: string;
  showLoadingIndicatior = true;

  constructor(public _router: Router, location: PlatformLocation, @Inject(WEB3) private web3: Web3, private deviceService: DeviceDetectorService) {
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

    if (this.web3.currentProvider) {
      await this.web3.currentProvider;
      console.log(this.web3.currentProvider);
    }
    else {
      console.log('para etherum');
      this._router.navigate(['/errors/etherumconfig']);
    }
    const accounts = await this.web3.eth.getAccounts();
    console.log(accounts);
  }

}
