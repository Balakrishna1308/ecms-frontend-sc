// import React, { useState } from "react";
// import "./CartService.css";

// const CartService = () => {
//   // Sample cart items
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Product 1",
//       price: 20.0,
//       quantity: 2,
//       image: "product1.jpg",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 15.0,
//       quantity: 1,
//       image: "product2.jpg",
//     },
//   ]);

//   const [promoCode, setPromoCode] = useState("");
//   const [discount, setDiscount] = useState(0);

//   // Calculate price breakdown
//   const calculateSubtotal = () =>
//     cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const handleQuantityChange = (id, change) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id
//         ? { ...item, quantity: Math.max(1, item.quantity + change) }
//         : item
//     );
//     setCartItems(updatedCart);
//   };

//   const handleRemoveItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//   };

//   const handleApplyPromoCode = () => {
//     if (promoCode === "SAVE10") {
//       setDiscount(10); // Apply $10 discount
//     } else {
//       alert("Invalid Promo Code");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = calculateSubtotal();
//     const shipping = 5.0; // Flat rate
//     const tax = subtotal * 0.05; // 5% tax
//     return subtotal + shipping + tax - discount;
//   };

//   return (
//     <div className="cart-service">
//       <h1>Shopping Cart</h1>

//       {/* Breadcrumb */}
//       <p className="breadcrumbs">Home &gt; Cart</p>

//       {/* Cart Items Section */}
//       {cartItems.length > 0 ? (
//         <div className="cart-items">
//           {cartItems.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-details">
//                 <p className="product-name">{item.name}</p>
//                 <p>Price: ${item.price.toFixed(2)}</p>
//                 <div className="quantity-controls">
//                   <button onClick={() => handleQuantityChange(item.id, -1)}>
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => handleQuantityChange(item.id, 1)}>
//                     +
//                   </button>
//                 </div>
//                 <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
//                 <button onClick={() => handleRemoveItem(item.id)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Your cart is empty. <a href="#shop">Start Shopping</a></p>
//       )}

//       {/* Price Breakdown Section */}
//       {cartItems.length > 0 && (
//         <div className="price-breakdown">
//           <h2>Price Breakdown</h2>
//           <div className="breakdown-row">
//             <span>Subtotal:</span>
//             <span>${calculateSubtotal().toFixed(2)}</span>
//           </div>
//           <div className="breakdown-row">
//             <span>Shipping:</span>
//             <span>$5.00</span>
//           </div>
//           <div className="breakdown-row">
//             <span>Taxes (5%):</span>
//             <span>${(calculateSubtotal() * 0.05).toFixed(2)}</span>
//           </div>
//           {discount > 0 && (
//             <div className="breakdown-row">
//               <span>Discount:</span>
//               <span>-${discount.toFixed(2)}</span>
//             </div>
//           )}
//           <hr />
//           <div className="breakdown-row total">
//             <span>Total:</span>
//             <span>${calculateTotal().toFixed(2)}</span>
//           </div>

//           {/* Promo Code Section */}
//           <div className="promo-code">
//             <input
//               type="text"
//               placeholder="Enter Promo Code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//             />
//             <button onClick={handleApplyPromoCode}>Apply</button>
//           </div>
//         </div>
//       )}

//       {/* Action Buttons */}
//       <div className="cart-actions">
//         <button className="continue-shopping-btn">Continue Shopping</button>
//         {cartItems.length > 0 && (
//           <button className="checkout-btn">Proceed to Checkout</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartService;






import React, { useState } from "react";
import "./CartService.css";

const CartService = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20.0,
      quantity: 2,
      image: "product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.0,
      quantity: 1,
      image: "product2.jpg",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleApplyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(10);
    } else {
      alert("Invalid Promo Code");
    }
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 5.0;
    const tax = subtotal * 0.05;
    return subtotal + shipping + tax - discount;
  };

  return (
    <div className="cart-service">
      <h1 className="heading">Shopping Cart</h1>

      <p className="breadcrumbs">Home &gt; Cart</p>

      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <p className="product-name">{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">
          Your cart is empty. <a href="#shop">Start Shopping</a>
        </p>
      )}

      {cartItems.length > 0 && (
        <div className="price-breakdown">
          <h2>Price Breakdown</h2>
          <div className="breakdown-row">
            <span>Subtotal:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="breakdown-row">
            <span>Shipping:</span>
            <span>$5.00</span>
          </div>
          <div className="breakdown-row">
            <span>Taxes (5%):</span>
            <span>${(calculateSubtotal() * 0.05).toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="breakdown-row">
              <span>Discount:</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
          <hr />
          <div className="breakdown-row total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>

          <div className="promo-code">
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleApplyPromoCode}>Apply</button>
          </div>
        </div>
      )}

      <div className="cart-actions">
        <button className="continue-shopping-btn">Continue Shopping</button>
        {cartItems.length > 0 && (
          <button className="checkout-btn">Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
};

export default CartService;
