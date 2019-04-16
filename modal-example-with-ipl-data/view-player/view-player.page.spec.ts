import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlayerPage } from './view-player.page';

describe('ViewPlayerPage', () => {
  let component: ViewPlayerPage;
  let fixture: ComponentFixture<ViewPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
