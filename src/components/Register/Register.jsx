import { useContext, useState } from "react";
import { AuthProvider } from "../../AuthProvider/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { theme } = useContext(AuthProvider);
    const { createUser } = useContext(AuthProvider);
    const [pass, setpass] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const conPass = form.conPass.value;
        if (pass !== conPass) {
            return setpass('password and confirm password is no match')
        }
        if (pass.length < 6) {
            setError('Please provide at least 6 character password');
            return;
        } else if (!/[A-Z]/.test(pass)) {
            setError('Please provide at least one Uppercase character.');
            return;
        } else if (!/[a-z]/.test(pass)) {
            setError('please provide at least one lowercase character');
            return;
        }

        setError('');



        createUser(email, pass)
            .then(res => {
                setSuccess(
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Register Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                );
                navigate(location?.state ? location.state : '/login')
            })
            .catch(error => {

            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 registerBg">
            <Helmet>
                <title>E-Group Study - Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className={theme === 'light' ? 'text-3xl font-bold mx-auto pt-5' : 'text-3xl font-bold mx-auto pt-5 text-white'}>Register Now</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className={theme === 'light' ? "label-text" : "label-text text-white"}>Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className=" border-b-2 border-black shadow-lg input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={theme === 'light' ? "label-text" : "label-text text-white"}>Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className=" border-b-2 border-black shadow-lg input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={theme === 'light' ? "label-text" : "label-text text-white"}>Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="password" className=" border-b-2 border-black shadow-lg input input-bordered" required />
                            {
                                error && <p className="text-red-600 font-semibold">{error}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={theme === 'light' ? "label-text" : "label-text text-white"}>Confirm Password</span>
                            </label>
                            <input type="password" name='conPass' placeholder="confirm password" className=" border-b-2 border-black shadow-lg input input-bordered" required />
                            {
                                pass && <p className="text-red-600 font-medium">{pass}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Allready have an account. Please <NavLink to='/login'><span className='text-blue-600 font-bold'>Login</span></NavLink></p>
                    </form>
                    {
                        success && <p>{success}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;