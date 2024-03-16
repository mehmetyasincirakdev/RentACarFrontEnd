import { CarDetail } from './carDetails';
import { ResponseModel } from './responseModel';

export interface CarDetailResponseModel extends ResponseModel {
  data: CarDetail[];
}
