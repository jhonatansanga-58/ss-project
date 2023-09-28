import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisableEventComponent } from './modal-disable-event.component';

describe('ModalDisableEventComponent', () => {
  let component: ModalDisableEventComponent;
  let fixture: ComponentFixture<ModalDisableEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDisableEventComponent]
    });
    fixture = TestBed.createComponent(ModalDisableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
