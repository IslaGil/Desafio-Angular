import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaAngComponent } from './logica-ang.component';

describe('LogicaAngComponent', () => {
  let component: LogicaAngComponent;
  let fixture: ComponentFixture<LogicaAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicaAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicaAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
