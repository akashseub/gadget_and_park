import React from 'react';
import { BsSmartwatch } from 'react-icons/bs';
import { FaBatteryFull, FaBluetooth, FaBolt, FaChargingStation, FaCut, FaFan, FaHeadphonesAlt, FaHome, FaLaptop, FaMobileAlt, FaNetworkWired, FaPlug, FaSyncAlt, FaVolumeUp } from 'react-icons/fa';
import { MdBackpack } from 'react-icons/md';

const categories = [
    { name: "Wired Earphone", icon: <FaHeadphonesAlt size={32} /> },
    { name: "Wireless Headset", icon: <FaBluetooth size={32} /> },
    { name: "Speakers", icon: <FaVolumeUp size={32} /> },
    { name: "Neckband", icon: <FaChargingStation size={32} /> },
    { name: "Powerbank", icon: <FaBatteryFull size={32} /> },
    { name: "Power Adapter", icon: <FaPlug size={32} /> },
    { name: "Power Cable", icon: <FaBolt size={32} /> },
    { name: "Smartwatch", icon: <BsSmartwatch size={32} /> },
    { name: "Converters", icon: <FaSyncAlt size={32} /> },
    { name: "Backpack", icon: <MdBackpack size={32} /> },
    { name: "Hubs & Docks", icon: <FaNetworkWired size={32} /> },
    { name: "Trimmer", icon: <FaCut size={32} /> },
    { name: "Home Appliance", icon: <FaHome size={32} /> },
    { name: "Laptop", icon: <FaLaptop size={32} /> },
    { name: "Fan", icon: <FaFan size={32} /> },
    { name: "Smart Gadgets", icon: <FaMobileAlt size={32} /> },
];

const FeatureCategories = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Featured Categories</h2>
                <p className="text-green-600 mt-1 font-semibold">
                    Shop Your Desired Product from Featured Category
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center border rounded-lg p-4 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                    >
                        <div className=" mb-2">{cat.icon}</div>
                        <p className="text-sm font-medium text-gray-700">{cat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCategories;