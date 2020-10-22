import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita4Page } from './receita4.page';

describe('Receita4Page', () => {
  let component: Receita4Page;
  let fixture: ComponentFixture<Receita4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
