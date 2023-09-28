import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cancel-registration',
  templateUrl: './modal-cancel-registration.component.html',
  styleUrls: ['./modal-cancel-registration.component.scss']
})
export class ModalCancelRegistrationComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalCancelRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
}
