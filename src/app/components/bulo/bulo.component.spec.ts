import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuloComponent } from './bulo.component';

describe('BuloComponent', () => {
  let component: BuloComponent;
  let fixture: ComponentFixture<BuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
