import {memo} from "react"
import { IoIosArrowDropdown } from "react-icons/io";
const Header = () => {
    return (
    <div className="flex w-[664px] h-[60px] justify-between pl-4 pr-4 mx-auto">
        <div className="w-[94.6px] pl-2"></div>
        <div className="w-[410.8] flex">
            <div className="flex items-center justify-cente">Dành cho bạn</div>
            <div className="flex items-center justify-cente"><IoIosArrowDropdown className="w-6 h-6" /></div>
        </div>
        <div className="w-[94.6px] pr-2"></div>
    </div>
)
};

export default memo(Header)