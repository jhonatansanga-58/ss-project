import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from '../models/event.model';
import { EventsService } from '../services/events/events.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cancel-registration',
  templateUrl: './modal-cancel-registration.component.html',
  styleUrls: ['./modal-cancel-registration.component.scss']
})
export class ModalCancelRegistrationComponent {
  constructor(
    private eventsService: EventsService,
    public dialogRef: MatDialogRef<ModalCancelRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) { }

  public unregister() {
    const registerMessage = 'You have successfully unregistered';
    this.eventsService.unregisterFromEvent(this.authService.userValue.id, this.data.id).subscribe({
      next: (res) => {
        this.snackBar.open(registerMessage, 'OK', {
          duration: 5000,
        });
        this.router.navigate(['/myevents'])
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
