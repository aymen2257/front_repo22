import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateagenceComponent } from './updateagence.component';

describe('UpdateagenceComponent', () => {
  let component: UpdateagenceComponent;
  let fixture: ComponentFixture<UpdateagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateagenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
