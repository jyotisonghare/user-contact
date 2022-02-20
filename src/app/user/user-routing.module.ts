import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: UserDashboardComponent },
  { path: 'contact',component: ContactComponent },
  // { path: '404', component: PageNotFoundComponent },
];
// const routes: Routes = [{
//   path: '',
//   data: {
//     title: '',
//     status: false
//   },
//   children: [
//     { path: '', redirectTo: 'contact', pathMatch: 'full' },
//     {
//       path: 'home',
//       component: UserDashboardComponent,
     
//     },
//     {
//       path: 'contact',
//       component: ContactComponent,
     
//     }
//   ]
// }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
