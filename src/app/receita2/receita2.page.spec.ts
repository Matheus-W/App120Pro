import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita2Page } from './receita2.page';

describe('Receita2Page', () => {
  let component: Receita2Page;
  let fixture: ComponentFixture<Receita2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
