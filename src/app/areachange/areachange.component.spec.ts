import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachangeComponent } from './areachange.component';

describe('AreachangeComponent', () => {
  let component: AreachangeComponent;
  let fixture: ComponentFixture<AreachangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreachangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreachangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
