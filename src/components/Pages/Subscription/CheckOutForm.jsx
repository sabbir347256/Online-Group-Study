import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
        } else {
            console.log('payment method', paymentMethod)
            if(paymentMethod.id){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Succesfully",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className="h-80">
            <CardElement>
                options ={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4'
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        }
                    }
                }}
            </CardElement>
            <button className="btn btn-sm btn-primary" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;