import {memo} from "react"
import Sidebar from "../../components/Sidebar";
import Header from "../header";
const MasterLayout = ({children, ...props}) => {
    return (

        <>
            <div className="flex">
                <Sidebar/>
                <div className="flex-1">
                    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-10">
                        <Header/>
                    </div>
                    <div className='mt-[60px]'>
                        <div {...props}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(MasterLayout)