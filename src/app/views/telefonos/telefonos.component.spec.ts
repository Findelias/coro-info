import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonosComponent } from './telefonos.component';

describe('TelefonosComponent', () => {
  let component: TelefonosComponent;
  let fixture: ComponentFixture<TelefonosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
