// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListCount = cartList.length
      const cartListTotal = cartList.reduce((acc, item) => {
        const {quantity, price} = item
        return acc + quantity * price
      }, 0)
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total:{' '}
            <span className="total-amount">Rs {cartListTotal}/-</span>
          </h1>
          <p className="cart-summary-count">{cartListCount} items in cart</p>
          <button className="cart-summary-btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
