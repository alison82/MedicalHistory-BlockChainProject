import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { EtherumconfigComponent } from './etherumconfig/etherumconfig.component';


@NgModule({
  declarations: [EtherumconfigComponent],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
