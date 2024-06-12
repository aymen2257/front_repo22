import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateagenceComponent } from './createagence.component';

describe('CreateagenceComponent', () => {
  let component: CreateagenceComponent;
  let fixture: ComponentFixture<CreateagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateagenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
