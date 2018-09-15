import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTableDetailComponent } from './content-table-detail.component';

describe('ContentTableDetailComponent', () => {
  let component: ContentTableDetailComponent;
  let fixture: ComponentFixture<ContentTableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
