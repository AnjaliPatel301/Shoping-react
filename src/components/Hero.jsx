import React from 'react';

const Hero = () => {
	const handleMoreInfo = () => {
		alert('More info coming soon!');
	};

	return (
		<section className="w-full min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16">
			<div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
				<img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA4L3Jhd3BpeGVsb2ZmaWNlMjFfcGhvdG9fb2ZfcmVhbGlzdGljX3NraW5fY2FyZV9wYWNrYWdpbmdfbW9ja191cF80YTQyNTliNy02MTRlLTQwY2QtYjFkYy1hYzRiMDc3ZmIxNDQtcm03MDQtbW9ja3VwLXJtMjY4My1tZWw1Y2k1dC5qcGc.jpg" alt="Hero" className="max-w-xs md:max-w-md rounded-lg shadow-lg" />
			</div>
			{/* Right: Content */}
			<div className="w-full md:w-1/2 flex flex-col items-start md:pl-12">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MyShop</h1>
				<p className="text-lg  mb-6">Discover Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, blanditiis. the best products at unbeatable prices. Shop now and enjoy exclusive deals and fast delivery!</p>
				<button onClick={handleMoreInfo} className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 hover:text-white transition">More Info</button>
			</div>
		</section>
	);
};

export default Hero;
