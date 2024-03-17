import {Customer} from "./customer.model";

export interface Productorder {
  id?: number;
  customer: Customer;
  date?: Date;
  totalPrice: number;
  status?: string;
}


