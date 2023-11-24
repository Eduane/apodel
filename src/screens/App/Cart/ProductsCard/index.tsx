import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles"; // Import your styles
import MainText from "../../../../components/MainText";
import ProductItem from "./ProductsITem";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ProductListComponentProps {
  storeName: string;
  numberOfProducts: number;
  products: Product[];
}

const ProductListComponent: React.FC<ProductListComponentProps> = ({
  storeName,
  numberOfProducts,
  products,
}) => {
  const [productQuantities, setProductQuantities] = useState(
    products.map((product) => ({ id: product.id, quantity: 0 }))
  );

  const handleIncrement = (productId: number) => {
    const updatedQuantities = productQuantities.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setProductQuantities(updatedQuantities);
  };

  const handleDecrement = (productId: number) => {
    const updatedQuantities = productQuantities.map((item) =>
      item.id === productId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setProductQuantities(updatedQuantities);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MainText size="large">
          {numberOfProducts} produkte nga{"  "}
          <MainText size="large" weight="bold">
            "{storeName}"
          </MainText>
        </MainText>
      </View>
      <ScrollView style={styles.items}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            quantity={
              productQuantities?.find((item) => item.id === product.id)
                ?.quantity
            }
            onIncrement={() => handleIncrement(product.id)}
            onDecrement={() => handleDecrement(product.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductListComponent;
