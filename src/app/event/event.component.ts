import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ModalCancelRegistrationComponent } from '../modal-cancel-registration/modal-cancel-registration.component';
import { Router } from '@angular/router';
import { ModalUpdateEventComponent } from '../modal-update-event/modal-update-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  openCancelRegistrationDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.openDialog(enterAnimationDuration, exitAnimationDuration, ModalCancelRegistrationComponent);
  }

  openEditEventDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.openDialog(enterAnimationDuration, exitAnimationDuration, ModalUpdateEventComponent);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, modal: any): void {
    this.dialog.open(modal, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
  public eventInfo() {
    this.router.navigate(['/event', 0]);
  }
}
