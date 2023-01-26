import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { getUsers } from "../../Redux/Actions/AuthActions";
import ListGroup from 'react-bootstrap/ListGroup';

const ListUser = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const Users = useSelector(state => state.AuthReducer.users)
    return (
        <>
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map(usr => <>
                            <tr key={usr._id}>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="ms-3">
                                            <p class="fw-bold mb-1">{usr.name}</p>
                                            <p class="text-muted mb-0">{usr.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="fw-normal mb-1">{usr.adress}</p>
                                    <p class="text-muted mb-0">{usr.phone}</p>
                                </td>
                                <td>
                                    <span class="badge badge-success rounded-pill d-inline">Active</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-link btn-sm btn-rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </>
    )
}
export default ListUser