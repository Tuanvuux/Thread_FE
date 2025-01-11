import {memo} from "react"
const Header = () => {
    return (
    <div className="flex w-[664px] h-[60px] justify-between pl-4 pr-4 mx-auto bg-zinc-400">
        <div className="w-[94.6px] pl-2">ok</div>
        <div className="w-[410.8]">ok</div>
        <div className="w-[94.6px] pr-2">ok</div>
    </div>
)
};

export default memo(Header)