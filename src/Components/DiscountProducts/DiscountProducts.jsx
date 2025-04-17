

const DiscountProducts = () => {

    const products = [
        {
            name: "Macbook Air M4 13-Inch 16GB/256GB 10 Core CPU 8 Core GPU",
            price: 129000,
            oldPrice: 137500,
            image: "https://i.ibb.co/Ldrht1j/macbook.png",
        },
        {
            name: "Pixel 9 Pro XL",
            price: 102000,
            oldPrice: 114000,
            image: "https://i.ibb.co/NZDhrv8/pixel.png",
        },
        {
            name: "AirPods Pro (2nd generation) USB-C",
            price: 25000,
            oldPrice: 34500,
            image: "https://i.ibb.co/M5hhRfw/airpods.png",
        },
        {
            name: "Apple Watch Series 10",
            price: 45500,
            oldPrice: 55000,
            image: "https://i.ibb.co/BBnXN2F/watch.png",
        },
    ];

    return (
        <div className="my-10 px-4 lg:px-12">
            <h2 className="text-2xl font-bold text-center mb-6">
                Product on Discount <span className="text-orange-500">🔥</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all flex flex-col items-center text-center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-32 object-contain mb-4"
                        />
                        <h3 className="text-md font-semibold mb-2">{product.name}</h3>
                        <div className="mb-3">
                            <span className="text-orange-500 font-bold text-lg mr-2">
                                {product.price}৳
                            </span>
                            <span className="line-through text-gray-500">{product.oldPrice}৳</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded">
                                Buy Now
                            </button>
                            <button className="border border-orange-500 text-orange-500 hover:bg-orange-100 px-4 py-1 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountProducts;