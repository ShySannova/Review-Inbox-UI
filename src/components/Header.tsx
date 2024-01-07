import { PiArrowElbowUpLeftBold } from "react-icons/pi";
import useTime from "../hooks/useTime"

interface TimeHookResult {
    formattedTime: string;
}

const Header = () => {

    const { formattedTime }: TimeHookResult = useTime();
    return (
        <header>
            <div className="text-[#83858b] flex justify-end py-[5px]">
                <p className="mr-[20px]">{formattedTime}</p>
            </div>
            <div className="flex text-[#bbbdc1] gap-[10px]">
                <PiArrowElbowUpLeftBold />
                <h1 className="text-7xl">

                    Review Inbox</h1>
            </div>
        </header>
    )
}

export default Header