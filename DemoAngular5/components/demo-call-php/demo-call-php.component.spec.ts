import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCallPhpComponent } from './demo-call-php.component';

describe('DemoCallPhpComponent', () => {
  let component: DemoCallPhpComponent;
  let fixture: ComponentFixture<DemoCallPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCallPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCallPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
