import React, { useEffect, useState } from 'react';
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getOneUser, updateUser } from '../../Redux/Actions/AuthActions';


const EditProfile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const oneuser = useSelector(State => State.AuthReducer.user)

    const [name, setName] = useState(oneuser.name)
    const [phone, setPhone] = useState(oneuser.phone)
    const [adress, setAdress] = useState(oneuser.adress)
    const [email, setEmail] = useState(oneuser.email)

    useEffect(() => {
        dispatch(getOneUser(id))
    }, [])
    useEffect(() => {
        setName(oneuser.name)
        setPhone(oneuser.phone)
        setAdress(oneuser.adress)
        setEmail(oneuser.email)
    }, [oneuser])

    const handleEdit = (a) => {
        a.preventDefault()
        dispatch(updateUser({ name, phone, adress, email }, id, navigate))

    }
    return (
        <div className='bodyyy1'>
            <form className='bodyyy'>

                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput value={name} onChange={(e) => setName(e.target.value)} type="text" id='form6Example1' label='Name' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput value={phone} onChange={(e) => setPhone(e.target.value)} type="number" id='form6Example2' label='Phone' />
                    </MDBCol>
                </MDBRow>
                <MDBInput value={adress} onChange={(e) => setAdress(e.target.value)} type="text" wrapperClass='mb-4' id='form6Example4' label='Address' />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" wrapperClass='mb-4' id='form6Example5' label='Email' />

                <MDBBtn onClick={(e) => handleEdit(e)} className='mb-4' type='submit' block>
                    Submit
                </MDBBtn>
                <MDBBtn onClick={() => navigate('/Profile')} className='mb-4' type='submit' block>
                    Cancel
                </MDBBtn>
            </form>
        </div>
    )
}
export default EditProfile