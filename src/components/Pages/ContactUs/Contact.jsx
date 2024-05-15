import { useContext } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { AuthProvider } from "../../../AuthProvider/AuthContext";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    const { theme } = useContext(AuthProvider);
    return (
        <div className={theme === 'light' ? "min-h-screen contactbg libre-font pt-20 md:pl-20" : "min-h-screen contactBg libre-font pt-20 md:pl-20"}>
            <Helmet>
                <title>E-Group Study - Contact Page</title>
            </Helmet>
            <div>
                <h2 className={theme === 'light' ? "text-[#002379] font-extrabold pl-4 md:pl-9 text-6xl" : "text-white font-extrabold pl-4 md:pl-9 text-6xl"}>Contact Us</h2>
                <div className="pt-10 pl-6">
                    <div className="flex items-center font-bold ">
                        <div>
                            <IoPersonSharp className="size-5 relative left-10 top-1"></IoPersonSharp>
                        </div>
                        <input className="p-3 bg-[#FDFFC2] mt-3  border-b-2 border-black shadow-2xl w-80 rounded-3xl" type="text" name="" id="" />
                        <h2 className=" text-gray-600 relative right-60 top-1">Name</h2>
                    </div>
                    <div className="flex items-center">
                        <MdEmail className="size-5 relative left-10"></MdEmail>
                        <input className="p-3 bg-[#FDFFC2] my-3 border-b-2 border-black shadow-2xl w-80 rounded-3xl" type="text" name="" id="" />
                        <h2 className="font-bold relative right-60   text-gray-600">Email</h2>
                    </div>
                    <div className="flex items-center pl-9 md:pl-0">
                        <RiMessage2Fill className=" size-20 relative left-10 bottom-12 md:bottom-14 md:size-5 "></RiMessage2Fill>
                        <input placeholder="" className=" bg-[#FDFFC2] border-b-2 border-black shadow-2xl p-3 w-[800px] md:w-80 h-40 rounded-3xl" type="text" name="" id="" />
                        <h2 className="font-bold relative right-40 md:right-[270px] bottom-8 md:bottom-14 text-gray-600">Tell us about your assignment</h2>
                    </div>
                    <button className="btn  btn-primary bg-[#002379] text-white rounded-2xl w-72 md:w-80 relative top-7 left-4">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;