import './App.css'
import TopBar from "./components/TopBar";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import BillCheck from "./components/BIllCheck";
import { createContext } from 'react';
import { useState } from 'react';

export const ShopCtx = createContext(null);

function App() {
 const items = [
  {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
  },
  {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
  },
  {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
  },
  {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
  },
  {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
  }
];
const [data,setData] = useState(items);
const [cartCount,setCartCount] = useState(0);
const [totalCost,setTotalCost] = useState(0);

const [cartCount1,setCartCount1] = useState(0);
const [totalCost1,setTotalCost1] = useState(0);
const [price1,setPrice1] = useState(items[0].price);

const [cartCount2,setCartCount2] = useState(0);
const [totalCost2,setTotalCost2] = useState(0);
const [price2,setPrice2] = useState(items[1].price);

const [cartCount3,setCartCount3] = useState(0);
const [totalCost3,setTotalCost3] = useState(0);
const [price3,setPrice3] = useState(items[2].price);

const [cartCount4,setCartCount4] = useState(0);
const [totalCost4,setTotalCost4] = useState(0);
const [price4,setPrice4] = useState(items[3].price);

const [cartCount5,setCartCount5] = useState(0);
const [totalCost5,setTotalCost5] = useState(0);
const [price5,setPrice5] = useState(items[4].price);

  
  return (
    <>
      <div className="app">
        <ShopCtx.Provider
          value={{
            data,setData,cartCount,setCartCount,totalCost,setTotalCost,
            cartCount1,setCartCount1,totalCost1,setTotalCost1,price1,setPrice1,
            cartCount2,setCartCount2,totalCost2,setTotalCost2,price2,setPrice2,
            cartCount3,setCartCount3,totalCost3,setTotalCost3,price3,setPrice3,
            cartCount4,setCartCount4,totalCost4,setTotalCost4,price4,setPrice4,
            cartCount5,setCartCount5,totalCost5,setTotalCost5,price5,setPrice5,
          }}>
          <TopBar />
          <Cart />
          <Cards />
          <BillCheck />
        </ShopCtx.Provider>
      </div>
    </>
  )
}

export default App


