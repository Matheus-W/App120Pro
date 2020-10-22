import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita1Page } from './receita1.page';

describe('Receita1Page', () => {
  let component: Receita1Page;
  let fixture: ComponentFixture<Receita1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
