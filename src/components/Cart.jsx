import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCard, DeleteCard,Increment,Drecement ,Totalcard} from "../features/counterSlice";
import { MdDelete } from "react-icons/md";
import { PiSmileySadDuotone } from "react-icons/pi";
import { FcDeleteDatabase } from "react-icons/fc";
import {Link} from 'react-router-dom'
import Products  from './Products'


const initialCart = [
  {
    id: 1,
    title: "Classic Watch",
    image:
      "https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwaef38d6c/2024/HO24/set_10282024_global/plp/1028_PLP_classic_watches_mobile.jpg",
    description: "Elegant and timeless watch for every occasion.",
    price: 2499,
    quantity: 1,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    image:
      "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg",
    description: "Experience true wireless freedom and premium sound.",
    price: 3999,
    quantity: 2,
  },
];

const Cart = () => {

const cardData = useSelector((state) => {
  console.log(state.cardItem.cart);
  return state.cardItem.cart;
});

 const usedishpach=useDispatch()
const productsAll=useSelector((state)=>state.cardItem)

 usedishpach(Totalcard())
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mt-11">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      
          <div className="space-y-6">
            {cardData.length===0?<p className="text-yellow-500">shop now 😫
          
            </p>
           : cardData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6 last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-md shadow"
                />
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-blue-600 font-bold text-lg">₹ {item.price}</span>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                        onClick={()=>{
                        usedishpach(Drecement(item))
                        }}
                        aria-label="Decrement"
                      >
                        -
                      </button>
                      <span className="px-2 font-medium">{item.qunataty}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                       onClick={()=>{
                        usedishpach(Increment(item))
                       }}
                        aria-label="Increment"
                      >
                        +
                      </button>
                    </div>
                    <span className="ml-auto text-gray-700 font-semibold">
                      ₹ {item.price * item.qunataty}
                    </span>
                    <button className="text-2xl"
                    onClick={()=>{usedishpach(DeleteCard(item))}}
                    ><FcDeleteDatabase /></button>
                  </div>
                </div>
              </div>
            ))}
            {
              cardData.length===0?" ": <div className="flex justify-end items-center mt-8">
              <span className="text-xl font-bold text-gray-800 mr-2">Total:</span>
              <span className="text-2xl font-bold text-blue-600">₹ {productsAll.totalPrice}</span>
            </div>
            }
           
          </div>
       
      </div>
    </div>
  );
};

export default Cart;