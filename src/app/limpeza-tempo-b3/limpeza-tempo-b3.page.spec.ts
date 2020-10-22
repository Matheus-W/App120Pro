import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB3Page } from './limpeza-tempo-b3.page';

describe('LimpezaTempoB3Page', () => {
  let component: LimpezaTempoB3Page;
  let fixture: ComponentFixture<LimpezaTempoB3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezaTempoB3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LimpezaTempoB3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
