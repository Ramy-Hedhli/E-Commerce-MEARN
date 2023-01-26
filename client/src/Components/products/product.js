
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneProduct } from "../../Redux/Actions/productsActions"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AddOrder } from "../../Redux/Actions/PanelActions";


export const Product = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [count, setCount] = useState(1)

    const HandleInc = (a) => {
        a = a + 1
        return a;
    }

    const HandleDec = (b) => {
        b > 0 && b--
        return b;
    }



    useEffect((
    ) => {
        dispatch(getOneProduct(id))
    }, [])
    const produit = useSelector(state => state.ProductsReducer.oneProduct)
    const [price, setPrice] = useState(produit.price)

    const HandelAdd = () => {
        dispatch(AddOrder(produit))
    }


    return (
        <div className="produit">


            <Card.Img style={{ width: '16rem', height: '16rem' }} variant="top" src={produit?.imageP?.imgUrl} />
            <Card>
                <Card.Header as="h5">F{produit.title}</Card.Header>
                <Card.Body>
                    <Card.Title>{produit.product_id}</Card.Title>
                    <Card.Text>
                        {produit.description}
                    </Card.Text>

                    {
                        produit.category == "For Him" || produit.category == "For Her" && <>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">M</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">L</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
                                <label class="form-check-label" for="inlineRadio3">XL (disabled)</label>
                            </div>
                        </>

                    }

                    <div className="content">
                        <span onClick={() => count > 1 && setCount(count - 1)} className="qt-minus">-</span>
                        <span className="qt">{count}</span>
                        <span onClick={() => setCount(count + 1)} className="qt-plus">+</span>
                        <h2 className="price">
                            Total Price: {produit.price * count} Dt</h2>
                    </div>
                    <div className="CardNav">
                        <Button variant="success">Buy</Button>
                        <Button onClick={() => navigate('/Store')} variant="success">Continue my purchases</Button>
                        <Button onClick={() => navigate('/Panel/:id')} variant="success">Validate my order</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}