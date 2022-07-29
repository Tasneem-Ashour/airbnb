import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostEditPageComponent } from './host-edit-page.component';

describe('HostEditPageComponent', () => {
  let component: HostEditPageComponent;
  let fixture: ComponentFixture<HostEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
