import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipoComponent } from './ripo.component';

describe('RipoComponent', () => {
  let component: RipoComponent;
  let fixture: ComponentFixture<RipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
