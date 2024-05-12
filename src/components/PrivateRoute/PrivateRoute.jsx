import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { AuthProvider } from "../../AuthProvider/AuthContext";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvider);
    const location = useLocation();
    if(loading){
        return <p className="text-red-600 text-center"><span className="loading loading-infinity loading-lg"></span></p>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes ={
    children : PropTypes.func
}
export default PrivateRoute;