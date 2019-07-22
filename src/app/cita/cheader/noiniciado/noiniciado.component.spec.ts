import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiniciadoComponent } from './noiniciado.component';

describe('NoiniciadoComponent', () => {
  let component: NoiniciadoComponent;
  let fixture: ComponentFixture<NoiniciadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiniciadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiniciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
