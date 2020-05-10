import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtherumconfigComponent } from './etherumconfig/etherumconfig.component';
import { BrowserunsupportedComponent } from './browserunsupported/browserunsupported.component';


const routes: Routes = [
  {
    path: 'etherum-config',
    component: EtherumconfigComponent
  },
  {
    path: 'browser-unsupported',
    component: BrowserunsupportedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
