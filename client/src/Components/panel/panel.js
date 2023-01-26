import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import { deleteOrder } from "../../Redux/Actions/PanelActions"

export const MyPanel = ({ order }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const HandleDelete = () => {
        dispatch(deleteOrder(order._id))
    }
    return (
        <div>
            <section class="EnTete">
                <Card.Header as="h5">My Panel</Card.Header>
                <div class="BTNUP">
                    <a href="ContinuerMesAchat">
                        <button onClick={() => navigate('/Store')} class="bouton1" type="ContinuerMesAchat">Continuer mes achat</button>
                    </a>
                    <a href="ValiderMaCommande">
                        <button onClick={() => navigate('/Pay/:id')} class="bouton2" type="ValiderMaCommande">Valider ma commande</button>
                    </a>
                </div>
            </section>

            <div class="container">
                <section id="cart">
                    <article id="article1" class="product">
                        <header>
                            <a onClick={() => HandleDelete()} id="remove1" class="remove">
                                {/* <Card.Img style={{ width: '16rem', height: '16rem' }} variant="top" src={produit?.imageP?.imgUrl} /> */}
                            </a>
                        </header>

                        <div class="content">
                            <span>{order.title}</span>
                            <p>{order.description}</p>

                        </div>


                        <footer class="content">

                            <span id="qt-minus1" class="qt-minus">-</span>
                            <span id="qt1" class="qt"></span>
                            <span id="qt-plus1" class="qt-plus">+</span>
                            <h2 id="full-price1" class="full-price"></h2>


                            <h2 id="price1" class="price"> </h2>

                        </footer>
                    </article>


                </section>

            </div>

            <footer id="site-footer">
                <div class="container clearfix">
                    <div class="right">
                        <h2 class="total">Total: <span id="total"></span>Dt</h2>
                    </div>
                </div>
            </footer>
        </div>
    )
}