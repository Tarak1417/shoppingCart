import { Card, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";

function ProductList({ products, cart, setCart }) {
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Products
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: "left", p: 3, boxShadow: 3 }}>
              <CardContent >
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">₹{product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" fullWidth onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
