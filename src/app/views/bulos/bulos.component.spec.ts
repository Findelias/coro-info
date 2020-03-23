import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulosComponent } from './bulos.component';

describe('BulosComponent', () => {
  let component: BulosComponent;
  let fixture: ComponentFixture<BulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
