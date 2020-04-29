import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { Roles } from './shared/models/enums.enum';
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin, Roles.doctor, Roles.patient]}
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./appointment/appointment.module').then(m => m.AppointmentModule),
      canActivate: [AuthGuard],
      data: { roles: [Roles.admin, Roles.doctor]}
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctors/doctors.module').then(m => m.DoctorsModule),
      canActivate: [AuthGuard],
      data: { roles: [Roles.admin]}
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then(m => m.PaymentModule),
      canActivate: [AuthGuard],
      data: { roles: [Roles.admin]}
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then(m => m.RoomModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'widget',
    loadChildren: () =>
      import('./widget/widget.module').then(m => m.WidgetModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'ui',
    loadChildren: () => import('./ui/ui.module').then(m => m.UiModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}

  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
      canActivate: [AuthGuard],
      data: { roles: [Roles.admin]}
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
      canActivate: [AuthGuard],
      data: { roles: [Roles.admin]}
  },
  {
    path: 'timeline',
    loadChildren: () =>
      import('./timeline/timeline.module').then(m => m.TimelineModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        m => m.AuthenticationModule
      )
  },
  {
    path: 'extra-pages',
    loadChildren: () =>
      import('./extra-pages/extra-pages.module').then(m => m.ExtraPagesModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.admin]}
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./errors/errors.module').then(m => m.ErrorsModule)
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
