import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestaoPage } from './gestao.page';

describe('GestaoPage', () => {
  let component: GestaoPage;
  let fixture: ComponentFixture<GestaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
