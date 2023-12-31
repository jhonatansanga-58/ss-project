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
import { SignUpComponent } from './sign-up/sign-up.component';
import { ModalCreateEventComponent } from './modal-create-event/modal-create-event.component';
import { ModalUpdateEventComponent } from './modal-update-event/modal-update-event.component';
import { ModalDisableEventComponent } from './modal-disable-event/modal-disable-event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ModalCancelRegistrationComponent,
    SignUpComponent,
    ModalCreateEventComponent,
    ModalUpdateEventComponent,
    ModalDisableEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
