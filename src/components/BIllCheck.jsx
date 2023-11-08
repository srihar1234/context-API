import { useContext } from "react";
import { ShopCtx } from "../App"

export default function BillCheck() {

    const {data, cartCount, totalCost,
           cartCount1, totalCost1,
           cartCount2, totalCost2,
           cartCount3, totalCost3,
           cartCount4, totalCost4,
           cartCount5, totalCost5,} = useContext(ShopCtx);

    return (
        <div>
            <h1 className="heading">BILL CHECK</h1>
            <div className="bill">
                <table className="billTable">
                    <thead>
                        <th>ITEM NAME</th>
                        <th>QUANTITY</th>
                        <th>COST</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data[0].title}</td>
                            <td>{cartCount1}</td>
                            <td>{totalCost1}</td>
                        </tr>
                        <tr>
                            <td>{data[1].title}</td>
                            <td>{cartCount2}</td>
                            <td>{totalCost2}</td>
                        </tr>
                        <tr>
                            <td>{data[2].title}</td>
                            <td>{cartCount3}</td>
                            <td>{totalCost3}</td>
                        </tr>
                        <tr>
                            <td>{data[3].title}</td>
                            <td>{cartCount4}</td>
                            <td>{totalCost4}</td>
                        </tr>
                        <tr>
                            <td>{data[4].title}</td>
                            <td>{cartCount5}</td>
                            <td>{totalCost5}</td>
                        </tr>
                        <tr>
                            <td colSpan="3">TOTAL QUANTITY : {cartCount}</td>
                        </tr>
                        <tr>
                            <td colSpan="3">TOTAL COST : {totalCost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}