import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita3Page } from './receita3.page';

describe('Receita3Page', () => {
  let component: Receita3Page;
  let fixture: ComponentFixture<Receita3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
