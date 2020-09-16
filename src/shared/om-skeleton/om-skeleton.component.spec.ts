import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmSkeletonComponent } from './om-skeleton.component';

describe('OmSkeletonComponent', () => {
  let component: OmSkeletonComponent;
  let fixture: ComponentFixture<OmSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
