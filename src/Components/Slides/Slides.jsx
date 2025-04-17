import React, { useState } from 'react';

const Slides = () => {
    const products = [
        {
            name: "Samsung Galaxy S25 Ultra",
            price: 129000,
            oldPrice: 137500,
            image: "https://i.ibb.co/qFp1YNHz/samsung-S25-Ultra.png",
        },
        {
            name: "Apple iPhone 16 Pro Max",
            price: 135000,
            oldPrice: 145000,
            image: "https://i.ibb.co/G4KSTZhc/iphone16pro-Max.png",
        },
        {
            name: "Google Pixel 9 Pro XL",
            price: 118000,
            oldPrice: 128000,
            image: "https://i.ibb.co.com/ymGpX6Zq/pixel-9-proxl.png",
        },
    ];

    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const { name, image, price, oldPrice } = products[current];

    return (
        <div className="bg-base-200 h-full rounded-xl p-4 relative">
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between">
                <img src={image} alt={name} className="w-full max-w-sm h-auto max-h-[300px] object-contain rounded-lg" />

                <div className="px-4">
                    <h1 className="text-4xl font-bold">Featured Phone</h1>
                    <div className="py-6">
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p className="text-orange-500 text-xl font-bold">
                            {price}৳ <span className="text-gray-400 line-through ml-2">{oldPrice}৳</span>
                        </p>
                        <p className="mt-2">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
            >
                ◀
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
            >
                ▶
            </button>
        </div>
    );
};

export default Slides;
