import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../models/carDetails';
import { CarDetailService } from '../../services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css',
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  constructor(private carDetail: CarDetailService) {}
  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carDetail.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
