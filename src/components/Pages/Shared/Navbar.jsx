import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../image/logo.png'
import { useContext, useState } from 'react';
import { AuthProvider } from '../../../AuthProvider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut, toggleTheme,theme } = useContext(AuthProvider);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const navlinks = <>
        <li className='font-semibold text-black'><NavLink to='/'>Home</NavLink></li>
        <li className='font-semibold text-black'><NavLink to='/allassignment'>Assignments</NavLink></li>
        {
            user && <li className='font-semibold text-black'><NavLink to='/createassignment'>Create Assignment</NavLink></li>
        }
        {
            user && <li className='font-semibold text-black'><NavLink to='/pendingassignment'>Pending Assignment</NavLink></li>
        }
        {
            user && <li className='font-extrabold text-black'><NavLink to='/subscription'>Subscription</NavLink></li>
        }
        <li className='font-semibold text-black'><NavLink to='/contact'>Contact Us</NavLink></li>
        {
            user ? '' : <li className='font-semibold text-black'><NavLink to='/login'>Login</NavLink></li>
        }
        {
            user ? '' : <li className='font-semibold text-black'><NavLink to='/register'>Register</NavLink></li>
        }
    </>



    const handleSignOut = () => {
        logOut()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log Out Successfully",
            showConfirmButton: false,
            timer: 1500
        })
        navigate(location?.state ? location.state : '/login')
    }


    return (
        <div className={theme === 'light'?"navbar nunito border-b w-full z-50 fixed bg-gray-50 ":"navbar nunito border-b w-full z-50 fixed bg-gray-50 "}>
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className={theme === 'light '?"btn btn-ghost lg:hidden":"btn btn-ghost text-black lg:hidden"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className={theme === 'light' ?"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52":"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"}>
                        {navlinks}
                    </ul>
                </div>
                <img className='rounded-full h-10 relative right-3 md:right-0 lg:right-0' src={logo} alt="" />
                <a className="btn btn-ghost relative right-2 md:right-0 lg:right-0 text-xl font-extrabold bg-gray-50 text-black">E-GroupStudy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  bg-gray-50 rounded-lg">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="cursor-pointer grid place-items-center mx-6 relative left-7 md:left-0 lg:left-0   z-10 ">
                    <input
                        onChange={toggleTheme}
                        type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {
                    user && <div className="dropdown dropdown-end mr-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="" src={user ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <NavLink to='/myassignment'><li><a>My Attempted Assignments</a></li></NavLink>
                            <li><button onClick={handleSignOut}>LogOut</button></li>
                        </ul>
                    </div>
                }

            </div>
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default Navbar;