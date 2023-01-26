import React, { useEffect, useState } from 'react';
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import { getOneProduct, updateProduct } from '../../Redux/Actions/productsActions';
import { CategoryList } from '../../Redux/Actions/categoryActions';


const EditProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state => state.ProductsReducer.oneProduct)
    useEffect((
    ) => {
        dispatch(getOneProduct(id))
    }, [])
    const [title, setTitle] = useState(product.title)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)
    const [product_id, setProduct_id] = useState(product.product_id)
    const [image, setImage] = useState(product.image)
    useEffect((
    ) => {
        setTitle(product.title)
        setDescription(product.description)
        setPrice(product.price)
        setCategory(product.category)
        setProduct_id(product.product_id)
        setImage(product.image)
    }, [product])

    const handleEdit = (a) => {
        a.preventDefault()
        dispatch(updateProduct({ title, description, price, category, product_id }, id, navigate))

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
                            <MDBInput value={title} onChange={(e) => setTitle(e.target.value)} type="text" id='form6Example1' label='Title' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput value={product_id} onChange={(e) => setProduct_id(e.target.value)} type="text" id='form6Example2' label='Ref' />
                        </MDBCol>
                    </MDBRow>
                    <MDBInput value={price} onChange={(e) => setPrice(e.target.value)} type="number" wrapperClass='mb-4' id='form6Example4' label='Price' />

                    <MDBInput value={description} onChange={(e) => setDescription(e.target.value)} type="text" wrapperClass='mb-4' id='form6Example4' label='Description' />

                    {
                        categories.map(category => <div class="form-check form-check-inline">
                            <input value={category.name} onChange={(e) => setCategory(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                            <label class="form-check-label" for="inlineRadio1">{category.name}</label>
                        </div>)
                    }


                    <MDBBtn onClick={(e) => handleEdit(e)} className='mb-4' type='submit' block>
                        Add
                    </MDBBtn>
                    <MDBBtn onClick={() => navigate('/ProductListAdmin')} className='mb-4' type='submit' block>
                        Cancel
                    </MDBBtn>
                </form>
            </div>
        </>
    )
}

export default EditProduct