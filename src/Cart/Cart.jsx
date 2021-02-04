import './Cart.css';

function Cart({ cart, setCart }) {
  const toggleContent = e => {
    e.target.parentElement.classList.toggle('active');
  };

  const removeCartItem = name => {
    const index = cart.findIndex(skin => skin.name === name);
    setCart(cart.splice(index, 1));
  };

  return (
    <>
    <div className="cart">
      <button onClick={e => toggleContent(e)}>cart</button>
      <div className="cart-content-container">
        {cart.map((item, index) => <div className="cart-item-content" key={index}>
          {item.name}
        </div>)}
      </div>
    </div>
    </>
  );
}

export default Cart;
