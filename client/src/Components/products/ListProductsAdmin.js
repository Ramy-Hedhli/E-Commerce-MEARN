import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { ProductsList } from "../../Redux/Actions/productsActions"
import { CardProduct } from "./cardProduct"


export const ListProductsAdm = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ProductsList())
    }, [])
    const list = useSelector(State => State.ProductsReducer.products)
    return (

        <div className="AdminProduct">
            <Link to={'/CreateProduct'}>Add New Product</Link>
            <div className="ListProducts">
                {
                    list.map(product => <CardProduct key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}