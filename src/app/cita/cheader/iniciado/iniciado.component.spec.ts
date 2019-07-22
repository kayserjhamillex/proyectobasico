import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciadoComponent } from './iniciado.component';

describe('IniciadoComponent', () => {
  let component: IniciadoComponent;
  let fixture: ComponentFixture<IniciadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
