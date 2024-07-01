import React from 'react';
import logo from "../assets/logo.png";
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";
import founder3 from "../assets/founder3.jpg";
import founder4 from "../assets/founder4.jpg";
export default function AboutUs() {
    return (
        <div className="bg-white text-gray-800 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                {/* <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1> */}
                <div className="mb-6 flex items-center">
                    <img src={logo} alt="Company Image" className="w-[320px] h-[320px] object-cover" />
                    <div className="ml-4 flex flex-col">
                        <h1 className="text-green-700 font-bold text-8xl">Poshinda.co</h1>
                        <div className="text-green-700 font-bold text-4xl">The Pure Essence of Nature & Soil</div>
                    </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                    Welcome to <span className="font-semibold text-green-700">Poshinda.co</span>, an agriculture product trading company founded by four dedicated farmer sons. We are committed to bringing the pure essence of nature and soil directly to you. Our journey started in the fertile lands where we learned the value of hard work, dedication, and sustainable farming practices.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Our mission is to connect farmers with the global market, ensuring that the products we trade are of the highest quality and sustainably sourced. We believe in fair trade practices and strive to empower the farming community by providing them with the support and resources they need to thrive.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    At <span className="font-semibold text-green-700">Poshinda.co</span>, we offer a wide range of agricultural products, including fresh produce, grains, and organic products. Our commitment to quality and sustainability is at the core of everything we do, and we are proud to contribute to a healthier planet and a more sustainable future.
                </p>
                <div className="mt-8">
                    <h2 className="text-3xl font-semibold text-center text-green-700 mb-4">Our Founders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                            <img src={founder2} alt="Founder 2" className="w-32 h-32 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-green-700">Mr. Ashish Kumbhare</h3>
                            <p className="text-center"> Co-Founder & Chief Executive Officer (CEO)

                            </p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                            <img src={founder1} alt="Founder 1" className="w-32 h-32 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-green-700">Mr. Homraj Jambhulkar</h3>
                            <p className="text-center">Co-Founder & Chief Financial Officer (CFO)</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                            <img src={founder4} alt="Founder 4" className="w-32 h-32 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-green-700">Mr. Vaibhav Jambhulkar</h3>
                            <p className="text-center">Co-Founder & Chief Operating Officer (COO)</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                            <img src={founder3} alt="Founder 3" className="w-32 h-32 object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-green-700">Mr. Harish Ukare</h3>
                            <p className="text-center">Co-Founder & Chief Technology Officer (CTO)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
