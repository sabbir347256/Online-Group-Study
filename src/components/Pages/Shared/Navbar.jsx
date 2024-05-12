import { NavLink } from 'react-router-dom';
import logo from '../../../image/logo.png'
import { useContext } from 'react';
import { AuthProvider } from '../../../AuthProvider/AuthContext';

const Navbar = () => {
    const {user,logOut} = useContext(AuthProvider);

    const navlinks = <>
        <li className='font-semibold text-white'><NavLink to='/'>Home</NavLink></li>
        <li className='font-semibold text-white'><NavLink to='/allassignment'>Assignments</NavLink></li>
        <li className='font-semibold text-white'><NavLink to='/about'>About</NavLink></li>
        {
            user ?<li className='font-semibold text-white'><NavLink to='/createassignment'>Create Assignment</NavLink></li> : 'hidden'
        }
        {
            user ? <li className='font-semibold text-white'><NavLink to='/pendingassignment'>Pending Assignment</NavLink></li> : 'hidden'
        }
        
    </>

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }


    return (
        <div className="navbar nunito navbarBg bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img className='rounded-full h-10' src={logo} alt="" />
                <a className="btn btn-ghost text-xl text-white font-extrabold">E-GroupStudy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?<div className="dropdown dropdown-end mr-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <NavLink to='/myassignment'><li><a>My Attempted Assignments</a></li></NavLink>
                        <li><button>Logout</button></li>
                    </ul>
                </div> : 'hidden'
                }
                {
                    user ? <NavLink to='/login' onClick={handleSignOut}><a className="btn">log out</a></NavLink> : <NavLink to='/login'><a className="btn">Login</a></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;