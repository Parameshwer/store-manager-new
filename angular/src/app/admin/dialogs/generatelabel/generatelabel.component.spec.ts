import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratelabelComponent } from './generatelabel.component';

describe('GeneratelabelComponent', () => {
  let component: GeneratelabelComponent;
  let fixture: ComponentFixture<GeneratelabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratelabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratelabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
