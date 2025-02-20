import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    const navigate = useNavigate();
    const navigateToContact = () => {
        navigate('/contact');
    }

    return (
        <>
            <div>
                <h1>
                    NAVBAR!!!
                </h1>
                <p>navigates</p>
                    <br />
                <ul>
                    <li>
                        <NavLink to={"/home"}>Home</NavLink>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <button onClick={navigateToContact}>Contact</button>
                    </li>
                    <li>
                        <NavLink to={"/profile"}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/product-list"}>Product List</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/login"}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin"}>Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/random_url_asdasdqweqwe"}>Not Found</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;