import { ComponentFixture, TestBed } from '@angular/core/testing';
import Bin from '../models/bin';
import { MainPageComponent } from './main-page.component';


//test increment bin quantity increments the running total
//test decerement bin quantity decrements the running total
//test a food item is emitted when clicked on from the search results

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('increment quanitity should increment the running total', () => {
    expect(component.runningTotal).toEqual(0);
    component.incrementQuantity(new Bin('01', 'apple', '0'));
    expect(component.runningTotal).toEqual(1);
    component.incrementQuantity(new Bin('01', 'apple', '1'));
    expect(component.runningTotal).toEqual(2);
  });

  it('decrement quantity should decrement the running total', () => {
    expect(component.runningTotal).toEqual(2);
    component.decrementQuantity(new Bin('01', 'apple', '2'));
    expect(component.runningTotal).toEqual(1);
    component.decrementQuantity(new Bin('01', 'apple', '0'));
    expect(component.runningTotal).toEqual(0);
    component.decrementQuantity(new Bin('01', 'apple', '0'));
    //shouldnt go below 0
    expect(component.runningTotal).toEqual(0);
  })
});
