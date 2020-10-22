import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperacaoPage } from './operacao.page';

describe('OperacaoPage', () => {
  let component: OperacaoPage;
  let fixture: ComponentFixture<OperacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
