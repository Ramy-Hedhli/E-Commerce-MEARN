import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, Loged } from "../../Redux/Actions/AuthActions"
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.AuthReducer.user)

    useEffect(() => {
        dispatch(Loged())
    }, [user])
    return (
        <div>
            {
                user &&
                <div>
                    <div class="card text-center">
                        <div class="card-header">Hello {user.name}</div>
                        <div class="card-body">
                            <h5 class="card-title">Email:{user.email} </h5>
                            <h5 class="card-title">Phone Number:{user.phone} </h5>
                            <p class="card-text">Adress:{user.adress}</p>
                            <a class="btn btn-primary"> <Link to={`/EditProfile/${user._id}`}>Edit</Link></a>
                            <a onClick={() => dispatch(deleteUser(user._id))} class="btn btn-primary">Delete</a>
                        </div>
                    </div >
                </div >
            }
        </div>
    )
}

export default Profile