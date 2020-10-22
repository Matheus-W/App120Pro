import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB1Page } from './limpeza-tempo-b1.page';

describe('LimpezaTempoB1Page', () => {
  let component: LimpezaTempoB1Page;
  let fixture: ComponentFixture<LimpezaTempoB1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezaTempoB1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LimpezaTempoB1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
