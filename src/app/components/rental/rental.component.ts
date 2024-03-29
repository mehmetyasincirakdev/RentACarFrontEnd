import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental-detail.service';
import { Rental } from '../../models/rentalDetail';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css',
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  constructor(private rentalService: RentalService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getRentals() {
    this.rentalService
      .getRentals()
      .subscribe((response) => (this.rentals = response.data));
  }
}
