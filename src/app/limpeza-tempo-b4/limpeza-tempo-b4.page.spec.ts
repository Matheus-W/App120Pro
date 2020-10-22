import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB4Page } from './limpeza-tempo-b4.page';

describe('LimpezaTempoB4Page', () => {
  let component: LimpezaTempoB4Page;
  let fixture: ComponentFixture<LimpezaTempoB4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezaTempoB4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LimpezaTempoB4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
