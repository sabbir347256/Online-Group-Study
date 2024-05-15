import { useContext } from 'react';
import logo from '../../../image/logo.png'
import { AuthProvider } from '../../../AuthProvider/AuthContext';
const Footer = () => {
    const {theme} = useContext(AuthProvider);
    return (
        <footer className={theme === 'light' ? "p-10 bg-[#002379] text-white grid grid-cols-5": "p-10 bg-[#121213] text-white grid grid-cols-5"}>
            <div className='col-span-2'>
                <img className=' rounded-full' src={logo} alt="" />
                <p className="text-3xl font-bold">E-Group Study</p>
            </div>
            <div className='flex justify-between col-span-3'>
                <div className='flex flex-col '>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col ml-3'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col pt-36 md:pt-0 relative right-32 md:right-0'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;