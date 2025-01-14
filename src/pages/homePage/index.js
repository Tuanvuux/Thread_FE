import {memo} from "react"
const HomePage = () => {
    return (
        <div className="w-[640px] h-[5000px] pt-2 mx-auto rounded-t-[24px] bg-white border border-gray-300">
            <div className="w-[640px] pl-6 pr-6 pt-4 pb-4 border-b border-gray-300">
                <div className="flex">
                    <div className="w-9 h-9">
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="Avatar" className="rounded-full"/>
                    </div>
                    <div className="w-[468px] ml-2 mr-2 pr-1 flex items-center justify-cente">
                        Bắt đầu thread...
                    </div>
                    <div className="pl-4 pr-4 border border-gray-300 rounded-[10px] flex items-center justify-cente">
                        <button >Đăng</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HomePage)