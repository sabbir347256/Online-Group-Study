import { useContext, useState } from 'react';
import { AuthProvider } from '../../../AuthProvider/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthProvider);
    const [success, setSuccess] = useState('');
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();




    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass)
        signIn(email, pass)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const googleAccount = () => {
        googleLogin(provider)
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Log In Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                );
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);

            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 loginBg shadow-2xl shadow-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-3xl font-bold mx-auto pt-5'>Login Your Account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input border-b-2 border-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="password" className="input border-b-2 border-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="text-gray-200 bg-black p-3">LOGIN</button>
                        </div>

                        <p>Do not have an account ? Please <NavLink to='/register'><span className='text-blue-600 font-bold'>Register</span></NavLink></p>
                    </form>
                    <div className="form-control mt-6">
                        <button onClick={googleAccount} className="text-gray-200 bg-black p-3">Google</button>
                    </div>
                </div>
                {
                    success && <p>{success}</p>
                }
            </div>
        </div>
    );
};

export default Login;