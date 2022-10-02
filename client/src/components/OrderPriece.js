import { useDispatch } from "react-redux";
import { orderPrice } from "../redux/actions"

export default function OrderPrice() {
    const dispatch = useDispatch()

    function onSelectChange(e) {
        dispatch(orderPrice(e.target.value))
    }

    return (
        <select name="orderPriece" onChange={onSelectChange}>
            <option value={false}>PRECIO</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
    )
}