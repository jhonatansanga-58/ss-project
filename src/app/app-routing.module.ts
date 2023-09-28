import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventsComponent } from './events/events.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { EventInfoComponent } from './event-info/event-info.component';

const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'myevents', component: MyEventsComponent},
  {path: 'myprofile', component: MyProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'event/:id', component: EventInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
