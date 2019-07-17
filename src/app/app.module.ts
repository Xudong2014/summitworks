import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminService} from 'src/app/adminservice';
import { DonateService } from 'src/app/donateservice';
//import { PopupModule } from 'ng2-opd-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplistComponent } from './applist/applist.component';
import { DonationlistComponent } from './donationlist/donationlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplistComponent,
    DonationlistComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
//    PopupModule.forRoot()
  ],
  providers: [AdminService,
              DonateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
