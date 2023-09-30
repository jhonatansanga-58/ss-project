import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ModalCancelRegistrationComponent } from '../modal-cancel-registration/modal-cancel-registration.component';
import { Router } from '@angular/router';
import { ModalUpdateEventComponent } from '../modal-update-event/modal-update-event.component';
import { Event } from '../models/event.model';
import { EventsService } from '../services/events/events.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() event: Event;
  @Input() role: string;
  @Input() view: string;

  constructor(
    private eventsService: EventsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
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

  public eventInfo(id) {
    this.router.navigate(['/event', id]);
  }

  public register() {
    const registerMessage = 'You have successfully registered!';
    this.eventsService.registerToEvent(this.authService.userValue.id, this.event.id).subscribe({
      next: (res) => {
        this.snackBar.open(registerMessage, 'OK', {
          duration: 5000,
        });
        this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
      },
      error: (res) => {
        this.snackBar.open(res.error.message, 'OK', { duration: 5000 });
      }
    });
  }
}
