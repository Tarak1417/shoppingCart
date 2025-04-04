import { Card, Typography, IconButton, Box, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProgressBar from "./ProgressBar";

const THRESHOLD = 1000;

function Cart({ cart, setCart, subtotal }) {
  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 0) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
        Cart Summary
      </Typography>
      <Card sx={{ p: 2, my: 2, boxShadow: 2, borderRadius: 2 }}>
        <Typography variant="h6">
          Subtotal: <span style={{ float: "right" }}>₹{subtotal}</span>
        </Typography>
        <hr/>
      <Typography sx={{bgcolor:"#F7F8FA", p:2, borderRadius:2}} variant="body2" color="textSecondary">
          {subtotal >= THRESHOLD ? "You got a free Wireless Mouse!" : <ProgressBar subtotal={subtotal} threshold={THRESHOLD} />}
        </Typography>
        
      </Card>

      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
        Cart Items
      </Typography>

      {cart.length === 0 ? (
        <Box
          sx={{
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 2,
            mt: 2,
          }}
        >
          <Typography variant="h6" color="textSecondary" textAlign="center">
               your Cart is empty.<br/>
            Add a few items to see here.
          </Typography>
        </Box>
      ) : (
        <Box sx={{ bgcolor: "white",boxShadow: 2, p: 2, borderRadius: 2, mt: 2 }}>
          {cart.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                boxShadow: 1,
                borderRadius: 2,
                mb: 2,
              }}
            >
              <Box>
                <Typography fontWeight="bold">{item.name}</Typography>
                <Typography color="textSecondary">
                  ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                </Typography>
              </Box>

              {item.id !== 99 ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    onClick={() => updateQuantity(item.id, -1)}
                    sx={{
                      bgcolor: "error.main",
                      color: "white",
                      borderRadius: 1,
                      "&:hover": { bgcolor: "error.dark" },
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ mx: 1, fontWeight: "bold" }}>{item.quantity}</Typography>
                  <IconButton
                    onClick={() => updateQuantity(item.id, 1)}
                    sx={{
                      bgcolor: "success.main",
                      color: "white",
                      borderRadius: 1,
                      "&:hover": { bgcolor: "success.dark" },
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              ) : (
                <Chip label="FREE GIFT" color="success" sx={{ fontWeight: "bold" }} />
              )}
            </Card>
          ))}
        </Box>
      )}
    </>
  );
}

export default Cart;
