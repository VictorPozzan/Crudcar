import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcarComponent } from './crudcar.component';

describe('CrudcarComponent', () => {
  let component: CrudcarComponent;
  let fixture: ComponentFixture<CrudcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
