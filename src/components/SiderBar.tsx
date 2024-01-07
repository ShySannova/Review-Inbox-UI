import { FaPlus } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
const SiderBar = () => {
    return (
        <aside className="h-[100%] w-min-[270px] fixed top-0 z-10">
            <ul className="h-full flex flex-col sidebar">
                <li>
                    <FaPlus />
                    <p>
                        <span>
                            New flow
                        </span>
                    </p>
                </li>
                <li className="active">
                    <IoMailSharp />
                    <p>
                        <span>
                            Coffee?
                        </span>
                        <BsDot /> Marisa Lu
                    </p>
                </li>
                <li>
                    <IoMailSharp />
                    <p>
                        <span>
                            FeedBack
                        </span>
                        <BsDot /> Lindsey Weiss
                    </p>
                </li>
                <li className="opacity-[.8]">
                    <IoMailSharp />
                    <p>
                        <span>
                            Post-grad plans
                        </span>
                        <BsDot /> Evelyn Ma
                    </p>
                </li>
                <li className="opacity-[.7]">
                    <IoMailSharp />
                    <p>
                        <span>
                            Launch plan
                        </span>
                        <BsDot /> Dennis Jin
                    </p>
                </li>
                <li className="opacity-[.6]">
                    <FaFacebookMessenger className="text-blue-500" />
                    <span>
                        Victoria Wang
                    </span>
                </li>
                <li className="opacity-[.5]">
                    <FaFacebookMessenger className="text-blue-500" />
                    <span>
                        Advait Kalakkad
                    </span>
                </li>
                <li className="opacity-[.4]">
                    <FaTwitter className="text-blue-500" />
                    <span>
                        Danny Trinh
                    </span>
                </li>
            </ul>
        </aside >
    )
}

export default SiderBar