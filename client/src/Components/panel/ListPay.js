import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { PanelList } from "../../Redux/Actions/PanelActions"
import { MyPanel } from "./panel"


export const PanelListOrder = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(PanelList())
    }, [])
    const list = useSelector(State => State.PanelReducer.Panels)
    return (
        <div className="ListOrder">
            {
                list.map(order => <MyPanel key={order._id} order={order} />)
            }
        </div>
    )
}