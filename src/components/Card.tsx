import { IoMailSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdKeyboardCommandKey } from "react-icons/md";


interface Message {
    title: string,
    sendBy: string,
    to: string,
    body: string,

}



const Card = ({ message }: { message: Message }) => {
    return (
        <div className="rounded-2xl overflow-hidden w-[520px] z-20">
            <div className="bg-yellow-400">

                <div className="bg-[#f2f2f3] flex justify-between items-center py-[10px] px-[40px]">
                    <div className="flex items-center gap-[20px]">
                        <IoMailSharp />
                        <p className="text-[#2A2A2A] font-semibold flex items-center">{message.title}
                            <span className="text-[#909090] flex items-center">
                                <BsDot />
                                Mail from {message.sendBy}
                            </span>
                        </p>
                    </div>
                    <FaMicrophone className="text-[#909090]" />
                </div>
                <div className="bg-[#F9F9F9] px-[40px] py-[20px] flex flex-col gap-[10px]">
                    <div className="flex items-center justify-between">
                        <h4 className="text-2xl text-[#4b4b4b]">{message.sendBy}</h4>
                        <p className="text-[#d6d6d6] font-bold">Just Now</p>
                    </div>
                    <h2 className="font-bold text-3xl">{message.title}</h2>
                    <div className="flex flex-col gap-[20px] mt-[20px] text-[#696868]">

                        <p className="">Hey {message.to},</p>
                        <div className="">
                            <p>{message.body}</p>
                        </div>
                        <span>{message.sendBy.split(" ")[0]}</span>
                        <div>
                            <hr />
                            <div className="flex gap-[10px] py-[10px] font-semibold">
                                <button className="bg-[#f2f2f3] py-[7px] px-[20px] rounded-xl">Reply</button>
                                <button className="bg-[#f2f2f3] py-[7px] px-[20px] rounded-xl">Forward</button>
                                <button className="bg-[#f2f2f3] py-[7px] px-[20px] rounded-xl">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center font-semibold gap-[10px] text-[#909296]">
                        <MdKeyboardCommandKey />
                        <button>More actions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card


