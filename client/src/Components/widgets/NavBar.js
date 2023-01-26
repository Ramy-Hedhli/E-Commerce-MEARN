import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../Redux/Actions/AuthActions';

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
    const user = useSelector(state => state.AuthReducer.user)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <Navbar {...props}>
                <Navbar.Brand>Ramy-Market</Navbar.Brand>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Nav.Item as={Link} to='/' eventKey="1" icon={<HomeIcon />}>
                        Home
                    </Nav.Item>
                    <Nav.Item as={Link} to='/Store' eventKey="2">Store</Nav.Item>
                </Nav>

                {
                    user && token ?
                        <>

                            <Nav onSelect={onSelect} activeKey={activeKey}>
                                <Nav.Menu title={user.name}>
                                    <Nav.Item as={Link} to='/Profile' eventKey="4">My Profile</Nav.Item>
                                    <Nav.Item eventKey="5">My Panel</Nav.Item>
                                    <Nav.Item onClick={() => { dispatch(Logout()); navigate('/') }} eventKey="6">Log Out</Nav.Item>
                                </Nav.Menu>
                                <Nav.Item as={Link} to='/Panel/:id' eventKey="6"><i class="fas fa-shopping-cart"></i>My Panel</Nav.Item>
                            </Nav>

                        </>
                        :
                        <>

                            <Nav onSelect={onSelect} activeKey={activeKey}>
                                <Nav.Item as={Link} to='/SignIn' eventKey="3" >Login</Nav.Item>
                                <Nav.Item as={Link} to='/SignUp' eventKey="3" >Register</Nav.Item>
                            </Nav>

                        </>
                }


                {
                    token && user.role == 1 && <Nav pullRight>

                        <Nav onSelect={onSelect} activeKey={activeKey}>
                            <Nav.Menu icon={<CogIcon />} title="Admin Menu">
                                <Nav.Item >
                                    <Nav.Item as={Link} to='/ListUsers' eventKey="4">List Users</Nav.Item>
                                    <Nav.Item as={Link} to='/CategoryListAdmin' eventKey="5">List Categorys</Nav.Item>
                                    <Nav.Item as={Link} to='/ProductListAdmin' eventKey="5">List Products</Nav.Item>
                                    <Nav.Item eventKey="6">??</Nav.Item>
                                </Nav.Item>
                            </Nav.Menu>
                        </Nav>
                    </Nav>

                }
            </Navbar>
        </>
    );
};

export default CustomNavbar