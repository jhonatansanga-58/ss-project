import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Event } from '../models/event.model';
import { EventsService } from '../services/events/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateEventDto } from '../dto/event.dto';

@Component({
  selector: 'app-modal-update-event',
  templateUrl: './modal-update-event.component.html',
  styleUrls: ['./modal-update-event.component.scss']
})
export class ModalUpdateEventComponent {

  isValid: boolean;
  updateEventForm: FormGroup;
  event: Event;

  constructor(
    private eventsService: EventsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalUpdateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.isValid = false;
    this.event = data;
    this.buildForm();
  }

  private buildForm() {
    this.updateEventForm = this.formBuilder.group({
      title: new FormControl(this.event.title, Validators.required),
      description: new FormControl(this.event.description, Validators.required),
      location: new FormControl(this.event.location, Validators.required),
      start_date: new FormControl(this.event.start_date, Validators.required),
      end_date: new FormControl(this.event.end_date, Validators.required),
      time: new FormControl(this.event.time, Validators.required),
      min_Age: new FormControl(this.event.min_age, Validators.required),
    });
  }

  public onSubmit() {
    const updateloginMessage = 'Event updated';

    this.eventsService.updateEvent(this.buildEventPayload()).subscribe({
      next: () => {
        this.snackBar.open(updateloginMessage, 'OK', {
          duration: 5000,
        });
        this.router.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });
      },
      error: (res) => {
        this.snackBar.open(res.error.message, 'OK', { duration: 5000 });
      }
    });
  }

  private buildEventPayload(): UpdateEventDto {
    const startDate = new Date(this.updateEventForm.get('start_date').value);
    const endDate = new Date(this.updateEventForm.get('end_date').value);

    let event = new UpdateEventDto();
    event.id = this.event.id;
    event.title = this.updateEventForm.get('title').value;
    event.description = this.updateEventForm.get('description').value;
    event.location = this.updateEventForm.get('location').value;
    event.start_date = this.formatDate(startDate);
    event.end_date = this.formatDate(endDate);
    event.time = this.updateEventForm.get('time').value;
    event.min_Age = this.updateEventForm.get('min_Age').value;
    return event;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const yearStr = year.toString();
    const monthStr = month < 10 ? '0' + month.toString() : month.toString();
    const dayStr = day < 10 ? '0' + day.toString() : day.toString();

    return yearStr + '-' + monthStr + '-' + dayStr;
  }
}
