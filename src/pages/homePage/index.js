import {memo} from "react"
import avatar from "../../assets/images/sidebar/home.svg"
const HomePage = () => {
    return (
        <div className="w-[640px] h-[5000px] pt-2 mx-auto border-t-[5px] bg-slate-300">
            <div className="w-[640px] pl-6 pr-6 pt-4 pb-4">
                <div className="flex">
                    <img src={avatar} alt="anh nguoi dung"></img>
                    <div className="w-[468px] ml-2 mr-2 pr-1">
                        Bắt đầu thread...
                    </div>
                    <div>
                        <button>Đăng</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HomePage)