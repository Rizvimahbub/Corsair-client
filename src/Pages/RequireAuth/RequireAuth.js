import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
// import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner/Spinner';

const RequireAuth = ({children}) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    // const [admin] = useAdmin(user);

    if(loading){
        return <Spinner/>;
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;