import { useContext } from "react"
import { ShopCtx } from "../App";

export default function Cart() {

    const { cartCount, totalCost } = useContext(ShopCtx);

    return (
        <div className="whole">
            <h1 className="heading">CART PREVIEW</h1>
            <div className="cartPreview">
                <h1>ITEMS IN CART : {cartCount}</h1>
                <h1>SUB-TOTAL COST : {totalCost}</h1>
                <h1>SHIPPING : FREE</h1>
            </div>
        </div>
    )
}