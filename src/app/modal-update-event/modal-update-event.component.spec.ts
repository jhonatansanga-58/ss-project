import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateEventComponent } from './modal-update-event.component';

describe('ModalUpdateEventComponent', () => {
  let component: ModalUpdateEventComponent;
  let fixture: ComponentFixture<ModalUpdateEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdateEventComponent]
    });
    fixture = TestBed.createComponent(ModalUpdateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
