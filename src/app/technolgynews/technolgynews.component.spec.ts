import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnolgynewsComponent } from './technolgynews.component';

describe('TechnolgynewsComponent', () => {
  let component: TechnolgynewsComponent;
  let fixture: ComponentFixture<TechnolgynewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnolgynewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnolgynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
