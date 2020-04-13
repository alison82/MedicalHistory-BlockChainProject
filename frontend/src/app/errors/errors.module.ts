import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { EtherumconfigComponent } from './etherumconfig/etherumconfig.component';
import { BrowserunsupportedComponent } from './browserunsupported/browserunsupported.component';


@NgModule({
  declarations: [EtherumconfigComponent, BrowserunsupportedComponent],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
