import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Asset/fast-delivery.svg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut(user)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    const menuItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>

        {
            user?.email ?
                <>
                    <li><Link to='/userReviews' className='font-semibold'>My Reviews</Link></li>
                    <li><Link to='/addservice' className='font-semibold'>Add Services</Link></li>
                    <button onClick={handleLogOut} className='btn btn-ghost'>Log out</button>
                </>
                :
                <li><Link to='/login' className='font-semibold'>Log In</Link></li>

        }
        <li><Link to='/blogs' className='font-semibold'>Blogs</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-40 w-full mb-12  pt-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='w-12' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.email ?
                                <img alt='' src={user?.photoURL} />
                                :
                                <p className='mt-2'><FaUser></FaUser></p>
                            }
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;