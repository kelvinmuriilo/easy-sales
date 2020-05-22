import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInputTextComponent } from './sales-input-text.component';

describe('SalesInputTextComponent', () => {
  let component: SalesInputTextComponent;
  let fixture: ComponentFixture<SalesInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
