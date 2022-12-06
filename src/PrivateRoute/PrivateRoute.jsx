import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    // Get user using useContext
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

        if(loading){
            return <Spinner style={{margin : "100px 100px 0"}} animation="border" variant="danger" />
        }

        if(user){
            return children
        }
        return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRoute;