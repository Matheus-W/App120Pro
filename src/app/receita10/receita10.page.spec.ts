import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Receita10Page } from './receita10.page';

describe('Receita10Page', () => {
  let component: Receita10Page;
  let fixture: ComponentFixture<Receita10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receita10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Receita10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
