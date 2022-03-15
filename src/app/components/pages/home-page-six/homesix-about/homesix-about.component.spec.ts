import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesixAboutComponent } from './homesix-about.component';

describe('HomesixAboutComponent', () => {
  let component: HomesixAboutComponent;
  let fixture: ComponentFixture<HomesixAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesixAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesixAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
