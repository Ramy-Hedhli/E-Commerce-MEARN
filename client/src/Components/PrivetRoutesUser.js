import { Navigate } from "react-router-dom"

const PrivetRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    return (
        <>
            {
                token ? children : <Navigate to='/' />
            }

        </>
    )
}
export default PrivetRoute