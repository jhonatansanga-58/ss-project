import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateEventComponent } from '../modal-create-event/modal-create-event.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLoggedIn: boolean;
  userName: string = null;
  userRole: string = null;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) {
    this.isLoggedIn = authService.userValue === null ? false : true;
    if (this.isLoggedIn) {
      this.userName = authService.userValue.name;
      this.userRole = authService.roleValue;
    }
  }

  openCreateEventDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalCreateEventComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  public logout() {
    this.authService.logout();
  }
}
