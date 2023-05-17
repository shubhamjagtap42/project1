import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScrapingComponent } from './data-scraping.component';

describe('DataScrapingComponent', () => {
  let component: DataScrapingComponent;
  let fixture: ComponentFixture<DataScrapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataScrapingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataScrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
