import { useContext } from "react"
import { ShopCtx } from "../App"


export default function Cards() {
    const { data,cartCount,setCartCount,price,totalCost,setTotalCost} = useContext(ShopCtx);
   

    return (
        <div className="cards">
            {
                data?.map((info, idx) => (
                    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={idx}>
                        <figure><img className="prodImg" src={info.images[0]} alt="Shoes" /></figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title">{info.title}</h2>
                            <p>Brand : {info.brand}</p>
                            <p>Rating : {info.rating}</p>
                            <p>Price : {info.price}</p>
                            <div className="card-actions flex justify-center align-center">
                                <button className="btn btn-primary" 
                                onClick={()=>{
                                    setCartCount(cartCount+1);
                                    setTotalCost(totalCost+price);
                                    }}>+</button>
                                <button className="btn btn-primary">In Cart : {cartCount}</button>
                                <button className="btn btn-primary" onClick={()=>{
                                    setCartCount(cartCount-1)
                                    setTotalCost(totalCost-price);
                                    }}>-</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}