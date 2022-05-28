import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const { _id, totalPrice, name, email } = order;
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState();
    const [complete, setComplete] = useState();
    const [transactionId, setTransactionId] = useState();
    const elements = useElements();
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    console.log(data.clientSecret)
                    setClientSecret(data.clientSecret)
                }
            })
    }, [totalPrice])

    console.log(_id)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            setError(error?.message);
        } else {
            setComplete('Congratulations ! Payment complete')
        }

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError?.message)
        }
        else {
            setComplete('Congratulations ! Payment complete')
            setTransactionId(paymentIntent.id)

            const payment = {
                order : _id,
                transactionId : paymentIntent.id
            }

            fetch(`http://localhost:5000/order/${_id}`,
            {
                method : 'PATCH',
                headers : {
                    'content-type': 'application/json'
                },
                body : JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                }
                )


        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-blue-700 border-0 text-white mt-20' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <div>
                    <p className='text-red-500 font-bold text-center mt-1'>{error}</p>
                    <p className='text-green-500 font-bold text-center mt-1'>{complete}</p>
                    <p className='mb-5 text-blue-500 mt-1'>Yor transaction id : {transactionId}</p>
                </div>
            </form>

        </>
    );
};

export default CheckoutForm;