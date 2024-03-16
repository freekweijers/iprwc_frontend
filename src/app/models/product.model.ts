import {Category} from "./category.model";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUri: string;
  // category: {
  //   id: number;
  //   name: string;
  //   description: string;
  // };
  category: Category;
}
