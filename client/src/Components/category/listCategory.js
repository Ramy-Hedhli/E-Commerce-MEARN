import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Dropdown from 'react-bootstrap/Dropdown';
import { CategoryList } from "../../Redux/Actions/categoryActions"
import { ListProducts } from "../products/listProduct";


const ListCategory = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CategoryList())
    }, [])
    const Category = useSelector(state => state.CategoryReducer.Category)
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories
                </Dropdown.Toggle>
                <ul>
                    <Dropdown.Menu variant="success">
                        {
                            Category.map(el =>

                                <Dropdown.Item ><li key={el._id} >{el.name}</li></Dropdown.Item>)



                        }
                    </Dropdown.Menu>
                </ul>
            </Dropdown>
            <br />
            <br />
            <ListProducts />
        </>


    )
}
export default ListCategory