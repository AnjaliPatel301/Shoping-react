import React, { use } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCard } from "../features/counterSlice";
//import { addToCart } from "../features/counterSlice";

const products = [
  {
    id: 1,
    title: "Classic Watch",
    image: "https://imgs.hcloset.com/uploads/public/5f7/d76/f21/5f7d76f215aca302334884.jpg",
    description: "Elegant and timeless watch for every occasion.",
    price: 2499,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    image: "https://m.media-amazon.com/images/I/61RomAW4KuL._AC_SL1500_.jpg",
    description: "Experience true wireless freedom and premium sound.",
    price: 3999,
  },
  {
    id: 3,
    title: "Leather Wallet",
    image: "https://i.etsystatic.com/15615725/r/il/8c1959/2134943175/il_fullxfull.2134943175_objx.jpg",
    description: "Premium leather wallet with multiple compartments.",
    price: 899,
  },
  {
    id: 4,
    title: "Smartphone",
    image: "https://cdn.pixabay.com/photo/2023/03/04/00/25/smartphone-7828621_1280.jpg",
    description: "Latest smartphone with high-resolution display and fast processor.",
    price: 19999,
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/I/71hlbslxrAL.jpg",
    description: "Portable speaker with deep bass and long battery life.",
    price: 1499,
  },
  {
    id: 6,
    title: "Running Shoes",
    image: "https://i5.walmartimages.com/seo/Artlea-Women-s-Running-Shoes-Cushioning-Trail-Tennis-Shoes-Lightweight-Breathable-Athletic-Sneakers-for-Gym-and-Workout-Size-5-5-11_7f724c33-729a-4d38-8b3d-af95bad64d3d.423265cb4bf928462fc82b4a8a7912ad.jpeg",
    description: "Comfortable and durable shoes for everyday running.",
    price: 2199,
  },
  {
    id: 7,
    title: "Sunglasses",
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?cs=srgb&dl=pexels-mota-701877.jpg&fm=jpg",
    description: "Stylish sunglasses with UV protection.",
    price: 799,
  },
  {
    id: 8,
    title: "Backpack",
    image: "https://i5.walmartimages.com/seo/Derstuewe-Cute-Pink-School-Backpack-for-Teens-and-Students-Pink-Color_a30d756b-646f-4088-9d18-0dcef1c8e1fa.3b40e659762cbd498cc534e8731e31a3.jpeg",
    description: "Spacious backpack for travel and daily use.",
    price: 1299,
  },
  {
    id: 9,
    title: "Fitness Tracker",
    image: "https://m.media-amazon.com/images/I/71Y0LOG3eYL.jpg",
    description: "Track your activity and health metrics all day long.",
    price: 2799,
  },
  {
    id: 10,
    title: "Coffee Maker",
    image: "http://g-ecx.images-amazon.com/images/G/01/aplusautomation/vendorimages/3fc3dd7e-cc54-4a5e-8e0b-444064a01b97.jpg._CB271660712_.jpg",
    description: "Brew delicious coffee at home with ease.",
    price: 3299,
  },
  {
    id: 11,
    title: "Girls drees",
    image: "https://i5.walmartimages.com/seo/Zpanxa-Toddler-Girls-Princess-Dress-Little-Party-Wedding-Formal-Dresses-Evening-Puff-Sleeve-Sequin-Kids-Pageant-Flower-Girl-Birthday-Gifts-Multicolor_bf7d745e-4066-448b-87fe-cdbba6efc941.559d9ac140b4745e7171a091de6bbc49.jpeg",
    description: "Elegant and timeless watch for every occasion.",
    price: 2499,
  },
  {
    id: 12,
    title: "Mackeup",
    image: "https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg",
    description: "Experience true wireless freedom and premium sound.",
    price: 3999,
  },
  {
    id: 13,
    title: "Leather Wallet",
    image: "https://i.etsystatic.com/15615725/r/il/8c1959/2134943175/il_fullxfull.2134943175_objx.jpg",
    description: "Premium leather wallet with multiple compartments.",
    price: 899,
  },
  {
    id: 14,
    title: "Smartphone",
    image: "https://cdn.pixabay.com/photo/2023/03/04/00/25/smartphone-7828621_1280.jpg",
    description: "Latest smartphone with high-resolution display and fast processor.",
    price: 19999,
  },
  {
    id: 15,
    title: "Saree Model",
    image: "https://www.seekpng.com/png/full/244-2448816_indian-sarees-silk.png",
    description: "Portable speaker with deep bass and long battery life.",
    price: 1499,
  },
];

const Products = () => {

 const dispatch=useDispatch()
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 bg-white rounded-full p-2 shadow">
                  <FaHeart size={18} />
                </button>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-blue-600">{product.price}</span>
                <button onClick={()=>{dispatch(addToCard(product))}} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                  <FaShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;