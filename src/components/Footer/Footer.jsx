import FooterBottom from './FooterBottom/FooterBottom';
import FooterContent from './FooterContent/FooterContent';
import FooterTop from './FooterTop/FooterTop';

function Footer() {
    return (
        <div className="bg-[#F0F0F0]">
            <div className="wrapper -translate-y-[90px]">
                <FooterTop />

                <FooterContent />

                <FooterBottom />
            </div>
        </div>
    );
}

export default Footer;
