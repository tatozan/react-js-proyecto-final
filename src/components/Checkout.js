import React from 'react'
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { CartContext } from '../context/CartContext';
import FormInput from './FormInput';
import { collection, addDoc } from "firebase/firestore"
import { db } from '../services/firebaseConfig'



export default function Checkout() {

    const {cart, cartTotal, clearCart} = useContext(CartContext)  

    const {values, handleChange} = useForm({
        name:'',
        surname:'',
        phoneNumber:'',
        email:'',
        confirmEmail:'',
    })

    //const [orderId, setOrderId] = useState('');

    const inputs = [
        {
            id: 1,
            name: 'name',
            label: 'Frist Name',
            type: 'text',
        },
        {
            id: 2,
            name: 'surname',
            label: 'Last Name',
            type: 'text',
        },
        {
            id: 3,
            name: 'phoneNumber',
            label: 'Phone Number',
            type: 'text',
        },
        {
            id: 4,
            name: 'email',
            label: 'Email',
            type: 'email',
        },
        {
            id: 5,
            name: 'confirmEmail',
            label: 'Confirm Email',
            type: 'email',
        },
    ]

    const handleSubmit = (event) =>{
        
        event.preventDefault();
        const orders = collection(db, 'myorderslist')

        //Ver ERROR de DB
        const newOrder = {
            buyer: values, 
            items: cart,
            //total: cartTotal,
        } 


        /*
        addDoc(ordersRef, order);
            .then(data => {
                setOrderId(data.id);
            })
            .catch( errorMessage => {
                console.error(errorMessage);
            }) 
        */
    }

    
  
    
    return (
    <>
        <h2>Checkout</h2>
        <div className='form-wrap'>
            <form onSubmit={handleSubmit}>
                {inputs.map(input => <FormInput {...input} value={values[input.name]} onChange={handleChange}/> )}
                <Button type="submit" variant='success' className="buybtn">Buy now</Button>
            </form>
        </div>
    </>
    )
}



