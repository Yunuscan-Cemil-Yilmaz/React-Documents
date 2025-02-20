import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <h2>Profile</h2>
            <p>links: </p>
            <br />
            <ul>
                <li>
                    <NavLink to={'settings'}>settings</NavLink>
                </li>
                <li>
                    <NavLink to={'orders'}>orders</NavLink>
                </li>
            </ul>
            <div>
                <h3>sub area:</h3>
                <Outlet />
            </div>
        </>
    )
}

export default Profile;