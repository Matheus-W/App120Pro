import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita8Page } from './receita8.page';

describe('Receita8Page', () => {
  let component: Receita8Page;
  let fixture: ComponentFixture<Receita8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
