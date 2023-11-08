import { useContext } from "react";
import { ShopCtx } from "../App"

export default function BillCheck() {

    const {cartCount, totalCost} = useContext(ShopCtx);

    return (
        <div>
            <div className="cartPreview">
                <h1>TOTAL ITEMS: {cartCount}</h1>
                <h1>TOTAL COST : {totalCost}</h1>
            </div>
        </div>
    )
}