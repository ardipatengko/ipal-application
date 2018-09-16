import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpalDataListComponent } from './ipal-data-list.component';

describe('IpalDataListComponent', () => {
  let component: IpalDataListComponent;
  let fixture: ComponentFixture<IpalDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpalDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpalDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
