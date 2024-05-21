import Title from '../../../components/Title/Title';

import Casual from '../../../assets/bs1.png';
import Formal from '../../../assets/bs2.png';
import Party from '../../../assets/bs4.png';
import Gym from '../../../assets/bs5.png';

function Browser() {
    return (
        <div className="wrapper">
            <div className="bg-[#F0F0F0] rounded-[40px] px-4 lg:px-[64px]">
                <Title className="text-center text-[32px] lg:text-[40px] py-[64px]">BROWSE BY dress STYLE</Title>

                <div>
                    <div className="flex gap-5 flex-col md:flex-row mb-5">
                        <div className="w-full lg:w-1/3 rounded-[20px] overflow-hidden relative">
                            <img
                                src={Casual}
                                alt="Casual"
                                className="w-full h-[190px] lg:h-[289px] object-cover hover:scale-[1.1] ease-in-out duration-300"
                            />
                            <span className="absolute top-5 left-5 text-[30px] font-[Satoshi] ">Casual</span>
                        </div>
                        <div className="lg:w-2/3 w-full rounded-[20px] overflow-hidden relative">
                            <img
                                src={Formal}
                                alt="Formal"
                                className="w-full h-[190px] lg:h-[289px] object-cover hover:scale-[1.1] ease-in-out duration-300"
                            />
                            <span className="absolute top-5 left-5 text-[30px] font-[Satoshi] ">Formal</span>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col md:flex-row pb-[64px]">
                        <div className="lg:w-2/3 w-full rounded-[20px] overflow-hidden relative">
                            <img
                                src={Party}
                                alt="Party"
                                className="w-full h-[190px] lg:h-[289px] object-cover hover:scale-[1.1] ease-in-out duration-300"
                            />
                            <span className="absolute top-5 left-5 text-[30px] font-[Satoshi] ">Party</span>
                        </div>
                        <div className="w-full lg:w-1/3 rounded-[20px] overflow-hidden relative">
                            <img
                                src={Gym}
                                alt="Gym"
                                className="w-full h-[190px] lg:h-[289px] object-cover hover:scale-[1.1] ease-in-out duration-300"
                            />
                            <span className="absolute top-5 left-5 text-[30px] font-[Satoshi] ">Gym</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Browser;
