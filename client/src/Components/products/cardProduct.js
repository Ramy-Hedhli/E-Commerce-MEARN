
import { useDispatch, useSelector } from "react-redux"
import StyledRating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteProduct } from "../../Redux/Actions/productsActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";



export const CardProduct = ({ product }) => {
    const Admin = useSelector(state => state.AuthReducer.user)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const HandleDelete = () => {
        dispatch(deleteProduct(product._id))
    }
    return (
        <div className="Products">
            <Card style={{ width: '18rem' }}>
                <Link to={`/Product/${product._id}`}>
                    <Card.Img style={{ width: '16rem', height: '16rem' }} variant="top" src={product?.imageP?.imgUrl} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Ref: {product.product_id}</ListGroup.Item>
                        <ListGroup.Item>Price:{product.price}dt</ListGroup.Item>
                        <ListGroup.Item><StyledRating
                            name="Red"
                            defaultValue={2}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
                        </ListGroup.Item>
                    </ListGroup>
                </Link>
                {
                    token && Admin.role == 1 &&
                    <Card.Body>
                        <Card.Link><Link to={`/UpdateProduct/${product._id}`} >Edit</Link></Card.Link>
                        <Card.Link onClick={() => HandleDelete()} >Delete</Card.Link>
                    </Card.Body>

                }
            </Card>

        </div >
    )
}
