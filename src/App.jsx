import { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProgressBar from "./ProgressBar";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

function App() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);

    if (newSubtotal >= THRESHOLD) {
      if (!cart.find((item) => item.id === FREE_GIFT.id)) {
        setCart([...cart, { ...FREE_GIFT, quantity: 1 }]);
      }
    } else {
      setCart(cart.filter((item) => item.id !== FREE_GIFT.id));
    }
  }, [cart]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Shopping Cart
      </Typography>
      <ProductList products={PRODUCTS} cart={cart} setCart={setCart} />
   
      <Cart cart={cart} setCart={setCart} subtotal={subtotal} />
    </Container>
  );
}

export default App;
