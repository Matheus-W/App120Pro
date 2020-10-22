import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita9Page } from './receita9.page';

describe('Receita9Page', () => {
  let component: Receita9Page;
  let fixture: ComponentFixture<Receita9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
