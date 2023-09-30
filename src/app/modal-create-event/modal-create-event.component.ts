import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../services/events/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateEventDto } from '../dto/event.dto';

@Component({
  selector: 'app-modal-create-event',
  templateUrl: './modal-create-event.component.html',
  styleUrls: ['./modal-create-event.component.scss']
})
export class ModalCreateEventComponent {
  isValid: boolean;
  createEventForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private eventsService: EventsService) {
    this.isValid = false;
    this.buildForm();
  }

  private buildForm() {
    this.createEventForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      min_age: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const createMessage = 'Event created!';
    
    this.eventsService.createEvent(this.buildEventPayload()).subscribe({
      next: () => {
        this.snackBar.open(createMessage, 'OK', {
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

  private buildEventPayload(): CreateEventDto {
    const startDate = new Date(this.createEventForm.get('start_date').value);
    const endDate = new Date(this.createEventForm.get('end_date').value);
    
    let event = new CreateEventDto();
    event.title = this.createEventForm.get('title').value;
    event.description = this.createEventForm.get('description').value;
    event.location = this.createEventForm.get('location').value;
    event.start_date = this.formatDate(startDate);
    event.end_date = this.formatDate(endDate);
    event.time = this.createEventForm.get('time').value;
    event.min_Age = this.createEventForm.get('min_age').value;
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
