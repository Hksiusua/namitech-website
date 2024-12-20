import { Input, Button } from 'antd';
import { LinkedinOutlined, FacebookOutlined, TwitterOutlined } from "@ant-design/icons"
import { ArrowRightOutlined } from "@ant-design/icons";

function Footer(){
    return(
        <div className="w-full h-full">
            <div className="w-full h-full grid grid-cols-12 bg-[#000000]">
                <div className=" col-span-12 lg:col-span-12 flex flex-col">
                    <div className="py-[150px] px-[50px] grid grid-cols-1 lg:grid-cols-1">
                        <div className="col-span-1 text-5xl font-bold text-white ">
                            <div className='pb-4'>
                                <h1 className="text-white text-4xl font-bold leading-snug">
                                    Turn your potential <br /> into performance.
                                </h1>
                            </div>
                            <div className="flex items-center border border-gray-500 rounded-md w-full max-w-lg pl-5 ">
                            <Input
                                placeholder="Enter your business email"
                                className="text-white bg-black px-4 py-5 placeholder-gray-500 border-none focus:bg-black hover:bg-black"
                            />
                                <Button
                                    type="primary"
                                    className="bg-white text-black font-semibold border-none px-4 py-8"
                                >
                                    Book a demo
                                </Button>
                            </div>
                        </div>  
                    </div>
                    <div className='w-full px-[50px] grid grid-cols-1 lg:grid-col-2'>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='col-span-1 lg:col-span-1 flex flex-col gap-4'>
                                <span className='text-white text-2xl font-bold'>Nami technology Joint-stock Company</span>
                                <div>
                                    <span className='text-white font-bold'>Office: </span><span className='text-white'>Biệt thự A 4-2, khu dân cư EverRich, 3, Đ. Phú Thuận, Phú Thuận, Quận 7, Hồ Chí Minh 700000, Vietnam</span>
                                </div>
                                <div>
                                    <span className='text-white font-bold'>Holine: </span><span className='text-white'>0862019142</span>
                                </div>
                                <div>
                                    <span className='text-white font-bold'>Email: </span><span className='text-white'>namitech@io.com</span>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <div className="w-12 h-12 flex justify-center items-center border border-gray-500 rounded-lg text-white">
                                        <LinkedinOutlined style={{ fontSize: "24px" }} />
                                    </div>

                                    <div className="w-12 h-12 flex justify-center items-center border border-gray-500 rounded-lg text-white">
                                        <FacebookOutlined style={{ fontSize: "24px" }} />
                                    </div>

                                    <div className="w-12 h-12 flex justify-center items-center border border-gray-500 rounded-lg text-white">
                                        <TwitterOutlined style={{ fontSize: "24px" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1 lg:col-span-1 flex flex-col'>
                                <div className="w-full bg-black text-white px-6">
                                    <div className="flex space-x-8 text-gray-400 text-sm mb-6">
                                        <a href="#" className="hover:text-white">Company</a>
                                        <a href="#" className="hover:text-white">Products</a>
                                        <a href="#" className="hover:text-white">Customers</a>
                                        <a href="#" className="hover:text-white">Resources</a>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-semibold mb-4">
                                            Subscribe for the latest <br /> NamiTech updates.
                                        </h1>
                                        <div className="flex items-center space-x-4">
                                            <button className="flex items-center justify-center w-12 h-12 bg-[#1A1A1A] border border-gray-500 rounded-lg">
                                                <ArrowRightOutlined className="text-white text-xl" />
                                            </button>
                                            <span className="text-sm font-medium">JOIN US</span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="px-[50px] grid grid-cols-1 lg:grid-cols-5 gap-4 bg-[#fff] p-4">
                        <div className="col-span-1">
                            <span>Namitech</span>
                        </div>
                        <div className="col-span-2">
                            <span>Nami Technology, Inc. All rights reserved</span>
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-center items-center space-x-6 text-gray-400 text-sm">
                                <a href="#" className="hover:text-white">
                                    Privacy policy
                                </a>
                                <span className="text-gray-600">•</span>
                                <a href="#" className="hover:text-white">
                                    Terms of use
                                </a>
                                <span className="text-gray-600">•</span>
                                <a href="#" className="hover:text-white">
                                    Vulnerability disclosure
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
