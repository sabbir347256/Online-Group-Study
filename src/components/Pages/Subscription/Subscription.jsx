import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Subscription = () => {
    return (
        <div>
            <div className="mx-auto text-center md:w-3/12 my-8">
                <h2 className="text-yellow-600 mb-2">---Please Pay For Special Assignment---</h2>
                <div className="text-center">
                    <h2><hr /></h2>
                    <h2 className="text-3xl font-bold border-y-4 py-4 ">PAYMENT</h2>
                    <h2><hr /></h2>
                </div>
            </div>
            <div>
                <Elements stripe={stripePromis}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Subscription;