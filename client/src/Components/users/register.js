import React, { useState } from 'react';
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Register } from '../../Redux/Actions/AuthActions';


const SignUp = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleReg = (a) => {
        a.preventDefault()
        dispatch(Register({ name, phone, adress, email, password }, navigate))

    }
    return (
        <div className='bodyyy1'>
            <form className='bodyyy'>

                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput onChange={(e) => setName(e.target.value)} type="text" id='form6Example1' label='Name' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput onChange={(e) => setPhone(e.target.value)} type="number" id='form6Example2' label='Phone' />
                    </MDBCol>
                </MDBRow>
                <MDBInput onChange={(e) => setAdress(e.target.value)} type="text" wrapperClass='mb-4' id='form6Example4' label='Address' />
                <MDBInput onChange={(e) => setEmail(e.target.value)} type="email" wrapperClass='mb-4' id='form6Example5' label='Email' />
                <MDBInput onChange={(e) => setPassword(e.target.value)} type="password" wrapperClass='mb-4' id='form6Example6' label='Password' />
                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form6Example8'
                    label='Create an account?'
                    defaultChecked
                />

                <MDBBtn onClick={(e) => handleReg(e)} className='mb-4' type='submit' block>
                    Register
                </MDBBtn>
            </form>
        </div>
    )
}
export default SignUp