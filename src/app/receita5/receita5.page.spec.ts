import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita5Page } from './receita5.page';

describe('Receita5Page', () => {
  let component: Receita5Page;
  let fixture: ComponentFixture<Receita5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
