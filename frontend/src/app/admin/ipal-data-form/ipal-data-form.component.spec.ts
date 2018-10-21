import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpalDataFormComponent } from './ipal-data-form.component';

describe('IpalDataFormComponent', () => {
  let component: IpalDataFormComponent;
  let fixture: ComponentFixture<IpalDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpalDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpalDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
