import React, { useEffect, useState } from 'react';
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import { AddProduct } from '../../Redux/Actions/productsActions';
import { CategoryList } from '../../Redux/Actions/categoryActions';


const CreateProduct = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setcategory] = useState('')
    const [product_id, setProduct_id] = useState('')
    const [imageP, setImageP] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleCreate = (a) => {
        a.preventDefault()
        const ProductData = new FormData();
        ProductData.append('title', title)
        ProductData.append('imageP', imageP)
        ProductData.append('description', description)
        ProductData.append('price', price)
        ProductData.append('product_id', product_id)
        ProductData.append('category', category)

        dispatch(AddProduct(ProductData, navigate))

    }

    const categories = useSelector(state => state.CategoryReducer.Category)
    useEffect(() => {
        dispatch(CategoryList())
    }, [categories])


    return (
        <>
            <div className='bodyyy1'>
                <form className='bodyyy'>

                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput accept='image/*' onChange={(e) => setImageP(e.target.files[0])} type="file" placeholder="Enter image link" />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput onChange={(e) => setTitle(e.target.value)} type="text" id='form6Example1' label='Title' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput onChange={(e) => setProduct_id(e.target.value)} type="text" id='form6Example2' label='Ref' />
                        </MDBCol>
                    </MDBRow>
                    <MDBInput onChange={(e) => setPrice(e.target.value)} type="number" wrapperClass='mb-4' id='form6Example4' label='Price' />

                    <MDBInput onChange={(e) => setDescription(e.target.value)} type="text" wrapperClass='mb-4' id='form6Example4' label='Description' />


                    <div class="form-check form-check-inline">
                        <input onChange={(e) => setcategory(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                        <label class="form-check-label" for="inlineRadio1">Laptop</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input onChange={(e) => setcategory(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                        <label class="form-check-label" for="inlineRadio1">Computer</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input onChange={(e) => setcategory(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                        <label class="form-check-label" for="inlineRadio1">For Him</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input onChange={(e) => setcategory(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                        <label class="form-check-label" for="inlineRadio1">For Her</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input onChange={(e) => setcategory(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                        <label class="form-check-label" for="inlineRadio1">Mobile Phone</label>
                    </div>


                    <MDBBtn onClick={(e) => handleCreate(e)} className='mb-4' type='submit' block>
                        Add
                    </MDBBtn>
                    <MDBBtn as={Link} to='/ProductListAdmin' className='mb-4' type='submit' block>
                        Cancel
                    </MDBBtn>
                </form>
            </div>
        </>
    )
}

export default CreateProduct