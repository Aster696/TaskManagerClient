import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopNavBarComponent } from './sub-top-nav-bar.component';

describe('SubTopNavBarComponent', () => {
  let component: SubTopNavBarComponent;
  let fixture: ComponentFixture<SubTopNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTopNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
