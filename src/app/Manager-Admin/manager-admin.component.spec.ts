import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAdminComponent } from './manager-admin.component';

describe('ManagerAdminComponent', () => {
  let component: ManagerAdminComponent;
  let fixture: ComponentFixture<ManagerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
