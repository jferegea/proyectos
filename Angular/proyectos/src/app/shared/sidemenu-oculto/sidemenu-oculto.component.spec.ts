import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuOcultoComponent } from './sidemenu-oculto.component';

describe('SidemenuOcultoComponent', () => {
  let component: SidemenuOcultoComponent;
  let fixture: ComponentFixture<SidemenuOcultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuOcultoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemenuOcultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
