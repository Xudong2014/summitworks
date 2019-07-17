import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplistComponent } from './applist/applist.component';
import { DonationlistComponent } from './donationlist/donationlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/gamelist', pathMatch: 'full' },
  { path: 'applist', component: ApplistComponent },
  { path: 'donationlist', component: DonationlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ApplistComponent,
                                  DonationlistComponent];
