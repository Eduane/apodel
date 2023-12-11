import { OrderProductType } from "../types/orders";
import { formatPrice } from "./formatPrice";

  
 export  function calculateTotalSum(products: OrderProductType[]): number {
    const totalSum = products.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
  
    return formatPrice(totalSum) ;
  }
  