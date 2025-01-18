import {memo} from "react"
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
const MasterLayout = ({ children, ...props }) => {
    return (
        <div className="flex">
            <div className="relative z-20">
                <Sidebar />
            </div>
            <div className="flex-1">
                <div className="fixed top-0 left-0 w-full z-10">
                    <Header />
                    
                </div>
                <div className="mt-[60px]">
                    <div {...props}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default memo(MasterLayout)