import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminagenceComponent } from './adminagence.component';

describe('AdminagenceComponent', () => {
  let component: AdminagenceComponent;
  let fixture: ComponentFixture<AdminagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminagenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
