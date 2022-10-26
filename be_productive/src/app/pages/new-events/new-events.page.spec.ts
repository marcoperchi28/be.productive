import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { NewEventsPage } from './new-events.page';

describe('NewEventsPage', () => {
  let component: NewEventsPage;
  let fixture: ComponentFixture<NewEventsPage>;
  let router : Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventsPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NewEventsPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to homepage to aggiungi', () => {
    spyOn(router, 'navigate');

    component.home();

    expect(router.navigate).toHaveBeenCalledWith(['home'])
  });

});
