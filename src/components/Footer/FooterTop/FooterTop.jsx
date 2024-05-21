import { RiMailSendLine } from 'react-icons/ri';

function FooterTop() {
    return (
        <div className="text-white flex lg:justify-between justify-center gap-[32px] text-center lg:text-left lg:flex-row flex-col py-[36px] px-[23px] lg:px-[64px] rounded-[20px] bg-black">
            <p className="font-[IntegralCf] text-[35px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            <div className="lg:min-w-[350px] relative">
                <input
                    className="border outline-none w-full pl-[50px] pr-[16px] py-2 rounded-[20px] text-black"
                    placeholder="Enter your email address"
                />
                <span className="absolute top-0 left-[14px] py-2">
                    <RiMailSendLine className="w-6 h-7 text-gray-400" />
                </span>
                <button className="w-full bg-white text-black mt-3 rounded-[20px] py-3 font-[Satoshi]">
                    Subscribe to Newsletter
                </button>
            </div>
        </div>
    );
}

export default FooterTop;
