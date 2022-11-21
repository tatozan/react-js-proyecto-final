import React from 'react'
import Button from 'react-bootstrap/Button';

export default function CartItem(props) {
  
  
  const {
    id,
    img,
    author,
    title,
    price,
    qty,
    removeItemFromCart
  } = props 


  return (
    <tr>
          <td>
              <img variant="top" src={img} width={100} height={100} />
              <p>Author: {author}</p>
              <p>Title: {title}</p>          
          </td>
          <td>{qty}</td>
          <td>${price}</td>
          <td><Button onClick={() => removeItemFromCart(id)}>Remove</Button></td>
    </tr>
  )
}
