import {Customer} from "./customer.model";

export interface ProductOrder {
  id?: number;
  customer: Customer;
  date?: Date;
  totalPrice: number;
  status?: string;
}


