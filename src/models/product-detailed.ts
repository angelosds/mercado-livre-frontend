import Price from './price';

type ProductDetailed = {
  condition: string;
  description: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: Price;
  sold_quantity: number;
  state_name: string;
  title: string;
};

export default ProductDetailed;
