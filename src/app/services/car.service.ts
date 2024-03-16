import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable, map } from 'rxjs';
import { Car } from '../models/car';
import { ColorService } from './color.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:61922/api/Cars/getall';
  constructor(
    private httpClient: HttpClient
  ) {}

  getCars(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
