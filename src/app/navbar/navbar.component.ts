import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateEventComponent } from '../modal-create-event/modal-create-event.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  openCreateEventDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalCreateEventComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  public logout() {
  }
}
