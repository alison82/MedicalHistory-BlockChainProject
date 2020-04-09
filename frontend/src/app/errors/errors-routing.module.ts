import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtherumconfigComponent } from './etherumconfig/etherumconfig.component';


const routes: Routes = [
  {
    path: 'etherumconfig',
    component: EtherumconfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
