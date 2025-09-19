import React, { useState } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useSelector } from 'react-redux';


export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const cartItems= useSelector((state)=>state.cardItem.cart)

	return (
		<nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center w-full">
				
					<div className="flex-shrink-0 flex items-center">
						<img className="h-8 w-auto" src="https://user-images.githubusercontent.com/10260230/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif" alt="Logo" />
						<span className="ml-2 font-bold text-xl text-gray-800">MyShop</span>
					</div>

					
					<div className="hidden md:flex space-x-8">
						<Link to={"/"} className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
						<Link  to={"/product"} className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
						<a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
						<a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
					</div>

					
					<div className="flex items-center">
						<Link to="/Cart">
						<button className="relative pl-4">
							<FaShoppingCart className="w-7 h-7 text-gray-700 hover:text-blue-600" />
							<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
								{cartItems.length}
							</span>
						</button>
</Link>
					
						<button
							type="button"
							className="md:hidden ml-4 text-gray-700 hover:text-blue-600 focus:outline-none"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							<FaBars className="h-6 w-6" />
						</button>
					</div>
				</div>
				

				{menuOpen && (
					<div className="md:hidden mt-2 bg-white shadow-lg rounded-lg">
						<Link to={"/"} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Home</Link>
						<Link  to={"/product"} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Products</Link>
						<a className="block py-2 px-4 text-gray-700 hover:bg-gray-100">About</a>
						<a className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Contact</a>
					</div>
				)}
			</div>
		</nav>
	);
}
