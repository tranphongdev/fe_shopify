import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function FooterContent() {
    return (
        <div className="py-[50px] mt-0 border-b border-gray-300 flex lg:flex-row flex-col lg:gap-[110px] gap-6">
            <div className="w-[248px]">
                <h2 className="font-[IntegralCf] text-[24px]">FE.SHOPIFY</h2>
                <p className="my-[30px]">
                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                </p>
                <div className="flex gap-3">
                    <FaTwitter className="w-6 h-6" />
                    <FaFacebook className="w-6 h-6" />
                    <FaLinkedin className="w-6 h-6" />
                    <FaGithub className="w-6 h-6" />
                </div>
            </div>

            <div className="flex-1 grid lg:grid-cols-4 grid-cols-2 text-left gap-6">
                <div className="space-y-4">
                    <h2 className="tracking-widest uppercase font-[Satoshi]">Company</h2>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>

                <div className="space-y-4">
                    <h2 className="tracking-widest uppercase font-[Satoshi]">Help</h2>
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>

                <div className="space-y-4">
                    <h2 className="tracking-widest uppercase font-[Satoshi]">FAQ</h2>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>

                <div className="space-y-4">
                    <h2 className="tracking-widest uppercase font-[Satoshi]">Resources</h2>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
        </div>
    );
}

export default FooterContent;
