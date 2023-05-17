import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoProjectComponent } from './repo-project.component';

describe('RepoProjectComponent', () => {
  let component: RepoProjectComponent;
  let fixture: ComponentFixture<RepoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
