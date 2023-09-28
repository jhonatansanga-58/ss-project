import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelRegistrationComponent } from './modal-cancel-registration.component';

describe('ModalCancelRegistrationComponent', () => {
  let component: ModalCancelRegistrationComponent;
  let fixture: ComponentFixture<ModalCancelRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCancelRegistrationComponent]
    });
    fixture = TestBed.createComponent(ModalCancelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
