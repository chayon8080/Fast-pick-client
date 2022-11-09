import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const Register = () => {
    const googeleProvider = new GoogleAuthProvider()
    const { createUser, logIn } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
        form.reset()
    }
    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googeleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="lg:text-left ">
                    <img src='https://www.projectcounter.org/wp-content/uploads/2016/03/icon-register.png' alt="" />
                </div>
                <div className="card text-center flex-shrink-0 max-w-sm shadow-2xl bg-base-100  py-3">
                    <h1 className="text-5xl text-center w-full mt-2 font-bold">Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
                    <p>Already Have an account? <Link to='/login' className=" text-center font-semibold text-teal-500">LogIn</Link></p>
                    <p>Register With Google <button className='btn btn-ghost' onClick={handleGoogleLogIn}><FaGoogle /> </button></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
