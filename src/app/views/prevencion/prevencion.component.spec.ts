import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevencionComponent } from './prevencion.component';

describe('PrevencionComponent', () => {
  let component: PrevencionComponent;
  let fixture: ComponentFixture<PrevencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
