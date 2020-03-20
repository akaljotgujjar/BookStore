import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookCardsComponent } from './textbook-cards.component';

describe('TextbookCardsComponent', () => {
  let component: TextbookCardsComponent;
  let fixture: ComponentFixture<TextbookCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
