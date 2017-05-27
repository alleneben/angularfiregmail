import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnustComponent } from './knust.component';

describe('KnustComponent', () => {
  let component: KnustComponent;
  let fixture: ComponentFixture<KnustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
