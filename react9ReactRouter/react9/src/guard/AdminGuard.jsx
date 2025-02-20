import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types'

const AdminGuard = ({ isLoggedIn, children }) => {
    if(!isLoggedIn){
        return <Navigate to={'/login'} />
        // if dont login -> navigate to login page !
    }

    return children;
}

AdminGuard.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,  
    children: PropTypes.node.isRequired,    
};

export default AdminGuard;