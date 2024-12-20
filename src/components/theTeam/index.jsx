function TheTeam() {
    return (
        <div className=" w-full">
            <div className=" w-full gap-4 grid grid-cols-12 bg-[#FFFFFF]">
                <div className="h-auto w-full col-span-12 flex flex-col pt-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500">
                            Meet Our Leader
                        </h1>
                        <div className="flex items-center justify-center mt-4">
                            <div className="w-80 h-[1px] bg-gray-300"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-16 mt-8">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 text-gray-800 flex flex-col items-center space-y-4"
                            >
                                <div className="text-center">
                                    <h1 className="text-xl font-semibold">Nguyen Thanh Lam.</h1>
                                    <p className="text-sm text-gray-500">Founder - CEO</p>
                                </div>

                                <div className="relative">
                                    <img
                                        className="w-36 h-36 rounded-full object-cover"
                                        src="https://via.placeholder.com/150"
                                        alt="Nguyen Thanh Lam"
                                    />
                                    <a
                                        href="#"
                                        className="absolute top-2 right-2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                                    >
                                        <span className="text-sm font-bold">in</span>
                                    </a>
                                </div>

                                <a
                                    href="#"
                                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    <span>See more</span>
                                    <span className="p-1 rounded-full border border-blue-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-16 lg:px-[250px] mt-8">
                        {[...Array(2)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 text-gray-800 flex flex-col items-center space-y-4"
                            >
                                <div className="text-center">
                                    <h1 className="text-xl font-semibold">Nguyen Thanh Lam.</h1>
                                    <p className="text-sm text-gray-500">Founder - CEO</p>
                                </div>

                                <div className="relative">
                                    <img
                                        className="w-36 h-36 rounded-full object-cover"
                                        src="https://via.placeholder.com/150"
                                        alt="Nguyen Thanh Lam"
                                    />
                                    <a
                                        href="#"
                                        className="absolute top-2 right-2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                                    >
                                        <span className="text-sm font-bold">in</span>
                                    </a>
                                </div>

                                <a
                                    href="#"
                                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    <span>See more</span>
                                    <span className="p-1 rounded-full border border-blue-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default TheTeam;
