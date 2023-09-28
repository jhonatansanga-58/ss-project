import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ModalCancelRegistrationComponent } from '../modal-cancel-registration/modal-cancel-registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  constructor(
    public dialog: MatDialog,
    private router: Router
    ){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalCancelRegistrationComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
  public eventInfo() {
    this.router.navigate(['/event', 0]);
  }

  public editEvent() {
    this.router.navigate(['/edit', 0]);
  }
}
