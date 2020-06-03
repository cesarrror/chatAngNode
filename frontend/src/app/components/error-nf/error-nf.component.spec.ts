import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNfComponent } from './error-nf.component';

describe('ErrorNfComponent', () => {
  let component: ErrorNfComponent;
  let fixture: ComponentFixture<ErrorNfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
