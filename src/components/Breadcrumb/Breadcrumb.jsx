import { FiChevronRight } from 'react-icons/fi';

function Breadcrumb({ children, className }) {
    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <span className="font-[Satoshi] text-gray-400">Home</span>
            <FiChevronRight />
            <span className="font-[Satoshi]">{children}</span>
        </div>
    );
}

export default Breadcrumb;
