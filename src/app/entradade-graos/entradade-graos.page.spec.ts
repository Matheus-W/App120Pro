import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntradadeGraosPage } from './entradade-graos.page';

describe('EntradadeGraosPage', () => {
  let component: EntradadeGraosPage;
  let fixture: ComponentFixture<EntradadeGraosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradadeGraosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntradadeGraosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
