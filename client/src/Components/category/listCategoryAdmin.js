import { useEffect } from "react"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { AddCategory, CategoryList, deleteCategory } from "../../Redux/Actions/categoryActions"


const ListCategoryA = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CategoryList())
    }, [])
    const Category = useSelector(state => state.CategoryReducer.Category)
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const handleAdd = (a) => {
        a.preventDefault()
        dispatch(AddCategory({ name }, navigate))
    }
    return (
        <>
            <div class="form-outline">
                <input onChange={(e) => setName(e.target.value)} type="text" id="typeText" class="form-control" />
                <label class="form-label" for="typeText">Category name</label>
            </div>
            <button onClick={(e) => handleAdd(e)} type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Add Category</button>
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th>Category Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Category.map(el => <>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="ms-3">
                                            <p class="fw-bold mb-1">{el.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button key={el._id} onClick={() => dispatch(deleteCategory(el._id))} type="button" class="btn btn-link btn-sm btn-rounded">
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
export default ListCategoryA