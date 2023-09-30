import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventsComponent } from './events/events.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'myevents', component: MyEventsComponent, canActivate: [AuthGuard] },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'event/:id', component: EventInfoComponent },
  { path: 'sign-up', component: SignUpComponent, canActivate: [NotAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
