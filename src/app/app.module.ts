import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventsComponent } from './events/events.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { ModalCancelRegistrationComponent } from './modal-cancel-registration/modal-cancel-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyEventsComponent,
    EventsComponent,
    MyProfileComponent,
    LoginComponent,
    EventComponent,
    EventInfoComponent,
    ModalCancelRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
