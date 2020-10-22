import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita6Page } from './receita6.page';

describe('Receita6Page', () => {
  let component: Receita6Page;
  let fixture: ComponentFixture<Receita6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
