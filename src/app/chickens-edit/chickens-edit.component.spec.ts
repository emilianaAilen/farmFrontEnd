import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickensEditComponent } from './chickens-edit.component';

describe('ChickensEditComponent', () => {
  let component: ChickensEditComponent;
  let fixture: ComponentFixture<ChickensEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickensEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickensEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
