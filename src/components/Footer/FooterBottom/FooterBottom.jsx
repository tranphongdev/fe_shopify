import visa from '../../../assets/visa.svg';
import apple from '../../../assets/apple.svg';
import paypal from '../../../assets/paypal.svg';
import pay from '../../../assets/pay.svg';
import google from '../../../assets/google.svg';

function FooterBottom() {
    return (
        <div className="mt-5 flex lg:flex-row flex-col text-center justify-between items-center gap-4">
            <p>Fe.Shopify © May 2024, All Rights Reserved</p>
            <div className="flex">
                <img src={visa} alt="visa" />
                <img src={apple} alt="apple" />
                <img src={paypal} alt="paypal" />
                <img src={pay} alt="pay" />
                <img src={google} alt="google" />
            </div>
        </div>
    );
}

export default FooterBottom;
