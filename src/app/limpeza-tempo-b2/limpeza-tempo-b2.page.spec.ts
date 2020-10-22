import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB2Page } from './limpeza-tempo-b2.page';

describe('LimpezaTempoB2Page', () => {
  let component: LimpezaTempoB2Page;
  let fixture: ComponentFixture<LimpezaTempoB2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezaTempoB2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LimpezaTempoB2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
