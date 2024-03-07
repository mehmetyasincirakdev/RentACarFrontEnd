import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  car1: any = { carId: 1, carName: "Audi", brandId: 1, carPrice: 22000 }
  car2: any = { carId: 2, carName: "Bmw", brandId: 1, carPrice: 22000 }
  car3: any = { carId: 3, carName: "Mercedes", brandId: 1, carPrice: 22000 }
  car4: any = { carId: 4, carName: "Skoda", brandId: 1, carPrice: 22000 }
  car5: any = { carId: 5, carName: "Wolkswagen", brandId: 1, carPrice: 22000 }

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5];
}
