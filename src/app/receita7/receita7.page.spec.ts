import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita7Page } from './receita7.page';

describe('Receita7Page', () => {
  let component: Receita7Page;
  let fixture: ComponentFixture<Receita7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
