import { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';


export default function Cart() {

  const {cart, cartTotal, removeItemFromCart} = useContext(CartContext)

  if (!cart.length) return (<h3>Your cart is empty!, please consider checking our <Link to='/'>products</Link></h3>)

  return (
 
    <Table hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{cart.map(product => <CartItem key={product.id} removeItemFromCart={removeItemFromCart} {...product}/>)}
      <tr><td><h3>Total: ${cartTotal}</h3></td></tr>
      </tbody>
      <Button as={Link} to='/checkout' variant="success" className="continue">Proceed to Checkout</Button>
    </Table>
  )
}
