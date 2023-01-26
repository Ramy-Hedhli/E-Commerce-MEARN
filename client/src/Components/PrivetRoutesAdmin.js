import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivetRouteAdmin = ({ children }) => {

    const user = useSelector(state => state.AuthReducer.user)
    const token = localStorage.getItem('token')

    return (
        <>
            {
                (token && user.role == 1) ? children : <Navigate to='/' />
            }

        </>
    )
}
export default PrivetRouteAdmin