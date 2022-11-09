import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const { logIn } = useContext(AuthContext)
    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
        form.reset();
    }
    return (
        <div>
            <div className="hero w-full">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="lg:text-left ">
                        <img className='rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKicoVstxT9FJ_7A-vDRj-F9xs3PoSwJf_Le8raRdhOziB30mBIFuIPGrBMQ4hAaO3EWg&usqp=CAU' alt="" />
                    </div>
                    <div className="card text-center flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-3">
                        <h1 className="text-5xl text-center w-full mt-2 font-bold">Login</h1>
                        <form onSubmit={handleLogIn} className="card-body">
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
                                <input type="submit" value="LogIn" className="btn btn-primary" />
                            </div>
                        </form>
                        <p>New to account? <Link to='/register' className=" text-center font-semibold text-teal-500">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;