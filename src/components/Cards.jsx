import { useContext } from "react"
import { ShopCtx } from "../App"


export default function Cards() {
    const { data,cartCount,setCartCount,totalCost,setTotalCost,
            cartCount1,setCartCount1,price1,totalCost1,setTotalCost1,
            cartCount2,setCartCount2,price2,totalCost2,setTotalCost2,
            cartCount3,setCartCount3,totalCost3,setTotalCost3,price3,
            cartCount4,setCartCount4,totalCost4,setTotalCost4,price4,
            cartCount5,setCartCount5,totalCost5,setTotalCost5,price5} = useContext(ShopCtx);
   

    return (
        <div className="cards">
                          
                    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data[0].id}>
                        <figure><img className="prodImg" src={data[0].images[0]} alt="Shoes" /></figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title">{data[0].title}</h2>
                            <p>Brand : {data[0].brand}</p>
                            <p>Rating : {data[0].rating}</p>
                            <p>Price : {data[0].price}</p>
                            <div className="card-actions flex justify-center align-center">
                                <button className="btn btn-primary" 
                                onClick={()=>{
                                    setCartCount1(cartCount1+1);
                                    setCartCount(cartCount+1);
                                    setTotalCost1(totalCost1+price1);
                                    setTotalCost(totalCost+price1);
                                    }}>+</button>
                                <button className="btn btn-primary">In Cart : {cartCount1}</button>
                                <button className="btn btn-primary" onClick={()=>{
                                    setCartCount1(cartCount1-1);
                                    setCartCount(cartCount-1);
                                    setTotalCost1(totalCost1-price1);
                                    setTotalCost(totalCost-price1);
                                    }}>-</button>
                            </div>
                        </div>
                    </div>
              

                    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data[1].id}>
                        <figure><img className="prodImg" src={data[1].images[0]} alt="Shoes" /></figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title">{data[1].title}</h2>
                            <p>Brand : {data[1].brand}</p>
                            <p>Rating : {data[1].rating}</p>
                            <p>Price : {data[1].price}</p>
                            <div className="card-actions flex justify-center align-center">
                                <button className="btn btn-primary" 
                                onClick={()=>{
                                    setCartCount2(cartCount2+1);
                                    setTotalCost2(totalCost2+price2);
                                    setCartCount(cartCount+1);
                                    setTotalCost(totalCost+price2);
                                    }}>+</button>
                                <button className="btn btn-primary">In Cart : {cartCount2}</button>
                                <button className="btn btn-primary" onClick={()=>{
                                    setCartCount2(cartCount2-1)
                                    setTotalCost2(totalCost2-price2);
                                    setCartCount(cartCount-1);
                                    setTotalCost(totalCost-price2);
                                    }}>-</button>
                            </div>
                        </div>
                    </div>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data[2].id}>
                        <figure><img className="prodImg" src={data[2].images[0]} alt="Shoes" /></figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title">{data[2].title}</h2>
                            <p>Brand : {data[2].brand}</p>
                            <p>Rating : {data[2].rating}</p>
                            <p>Price : {data[2].price}</p>
                            <div className="card-actions flex justify-center align-center">
                                <button className="btn btn-primary" 
                                onClick={()=>{
                                    setCartCount3(cartCount3+1);
                                    setTotalCost3(totalCost3+price3);
                                    setCartCount(cartCount+1);
                                    setTotalCost(totalCost+price3);
                                    }}>+</button>
                                <button className="btn btn-primary">In Cart : {cartCount3}</button>
                                <button className="btn btn-primary" onClick={()=>{
                                    setCartCount3(cartCount3-1)
                                    setTotalCost3(totalCost3-price3);
                                    setCartCount(cartCount-1);
                                    setTotalCost(totalCost-price3);
                                    }}>-</button>
                            </div>
                        </div>
                    </div>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data[3].id}>
                        <figure><img className="prodImg" src={data[3].images[0]} alt="Shoes" /></figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title">{data[3].title}</h2>
                            <p>Brand : {data[3].brand}</p>
                            <p>Rating : {data[3].rating}</p>
                            <p>Price : {data[3].price}</p>
                            <div className="card-actions flex justify-center align-center">
                                <button className="btn btn-primary" 
                                onClick={()=>{
                                    setCartCount4(cartCount4+1);
                                    setTotalCost4(totalCost4+price4);
                                    setCartCount(cartCount+1);
                                    setTotalCost(totalCost+price4);
                                    }}>+</button>
                                <button className="btn btn-primary">In Cart : {cartCount4}</button>
                                <button className="btn btn-primary" onClick={()=>{
                                    setCartCount4(cartCount4-1)
                                    setTotalCost4(totalCost4-price4);
                                    setCartCount(cartCount-1);
                                    setTotalCost(totalCost-price4);
                                    }}>-</button>
                            </div>
                        </div>
                    </div>



                    
                    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data[4].id}>
                        <figure><img className="prodImg" src={data[4].images[0]} alt="Shoes" /></figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title">{data[4].title}</h2>
                            <p>Brand : {data[4].brand}</p>
                            <p>Rating : {data[4].rating}</p>
                            <p>Price : {data[4].price}</p>
                            <div className="card-actions flex justify-center align-center">
                                <button className="btn btn-primary" 
                                onClick={()=>{
                                    setCartCount5(cartCount5+1);
                                    setTotalCost5(totalCost5+price5);
                                    setCartCount(cartCount+1);
                                    setTotalCost(totalCost+price5);
                                    }}>+</button>
                                <button className="btn btn-primary">In Cart : {cartCount5}</button>
                                <button className="btn btn-primary" onClick={()=>{
                                    setCartCount5(cartCount5-1)
                                    setTotalCost5(totalCost5-price5);
                                    setCartCount(cartCount-1);
                                    setTotalCost(totalCost-price5);
                                    }}>-</button>
                            </div>
                        </div>
                    </div>


            
        </div>
    )
}