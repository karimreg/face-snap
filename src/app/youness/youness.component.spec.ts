import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YounessComponent } from './youness.component';

describe('YounessComponent', () => {
  let component: YounessComponent;
  let fixture: ComponentFixture<YounessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YounessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YounessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
