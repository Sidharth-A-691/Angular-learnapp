import { Injectable } from '@angular/core';
import { Car } from './Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = [];

  constructor() {
    this.cars.push(new Car('0001', 'Mercedes-AMG G 63', '3.6 Crore','assets/images/0001.webp'));
    this.cars.push(new Car('0002', 'Mercedes-AMG GLE Coupe', '1.85 Crore','assets/images/0002.webp'));
    this.cars.push(new Car('0003', 'Mercedes-AMG GT', '2.27 Crore','assets/images/0003.webp'));
    this.cars.push(new Car('0004', 'Mercedes-AMG GLC 43 Coupe', '1.1 Crore','assets/images/0004.webp'));
    this.cars.push(new Car('0005', 'Mercedes-AMG GLA 35', '57.28 Lakh','assets/images/0005.webp'));
    this.cars.push(new Car('0006', 'Mercedes-AMG E 63 S', '1.77 Crore','assets/images/0006.webp'));
    this.cars.push(new Car('0007', 'Mercedes-AMG C 43', '98.25 Lakh','assets/images/0007.webp'));
    this.cars.push(new Car('0008', 'Mercedes-AMG EQS', '1.62 Crore','assets/images/0008.webp'));
    this.cars.push(new Car('0009', 'Mercedes-AMG A 45', '92.5 Lakh','assets/images/0009.webp'));
    this.cars.push(new Car('0010', 'Mercedes-AMG E 53', '1.06 Crore','assets/images/0010.webp'));
  }

  getCars(): Car[] {
    return this.cars;
  }

}
