import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Login } from '../../Redux/Actions/AuthActions';

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelLogin = (a) => {
        a.preventDefault()
        dispatch(Login({ email, password }, navigate))
    }

    return (
        <div className="SignIn">
            <form className='bodyyy bodyyy2'>
                <MDBInput onChange={(e) => setEmail(e.target.value)} className='mb-4' type='email' id='form2Example1' label='Email address' />
                <MDBInput onChange={(e) => setPassword(e.target.value)} className='mb-4' type='password' id='form2Example2' label='Password' />

                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                </MDBRow>

                <MDBBtn onClick={(e) => handelLogin(e)} type='submit' className='mb-4' block>
                    Sign in
                </MDBBtn>

                <div className='text-center'>
                    <p>or sign up with:</p>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </div>
            </form>
            <div className='ImgLogIn'>
                <img src='/images/LogIn.png' alt="Log In" />
            </div>
        </div>
    )
}
export default LogIn