import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostergacionComponent } from './postergacion.component';

describe('PostergacionComponent', () => {
  let component: PostergacionComponent;
  let fixture: ComponentFixture<PostergacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostergacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostergacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
