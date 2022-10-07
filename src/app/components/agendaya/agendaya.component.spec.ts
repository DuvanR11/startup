import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendayaComponent } from './agendaya.component';

describe('AgendayaComponent', () => {
  let component: AgendayaComponent;
  let fixture: ComponentFixture<AgendayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
