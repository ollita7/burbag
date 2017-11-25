import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavTicketComponent } from './sidenav-ticket.component';

describe('SidenavTicketComponent', () => {
  let component: SidenavTicketComponent;
  let fixture: ComponentFixture<SidenavTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
