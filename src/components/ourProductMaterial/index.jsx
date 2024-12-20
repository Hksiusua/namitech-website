function OurProductsMaterial() {
    return (
        <div className="w-full h-screen">
            <div className="w-full h-full grid grid-cols-12 bg-[#29151A] gap-[16px] p-4">
                <div className="col-span-12 lg:col-span-5 ">
                    <div className="h-full w-full bg-black text-white flex flex-col justify-center items-center border-[5px] rounded-xl border-gray-700">
                        <div className="text-center">
                            <div className="flex justify-center items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex justify-center items-center">
                                    <span className="text-white text-lg font-bold">CS</span>
                                </div>
                                <h1 className="ml-2 text-3xl font-bold">CrystalSound</h1>
                            </div>
                            <p className="text-lg mb-8">
                                Eliminating noise, CrystalSound leaves only clear voice in calls, online meetings, and recordings.
                            </p>
                            <div className="flex justify-center items-center space-x-4 mb-6">
                                <button className="w-10 h-10 flex justify-center items-center border border-gray-600 rounded-full">
                                    <span className="text-gray-400">&lt;</span>
                                </button>
                                <button className="w-10 h-10 flex justify-center items-center border border-gray-600 rounded-full">
                                    <span className="text-gray-400">&gt;</span>
                                </button>
                            </div>
                            <div className="text-sm text-gray-400 flex justify-center space-x-4 mb-8">
                                <span>1. Crystalsound</span>
                                <span>2. NamiGen</span>
                                <span>3. Namisense Anywhere</span>
                                <span>4. VoiceGate</span>
                            </div>
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                                Explore &rarr;
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7">
                    <div className="h-full w-full bg-black text-white flex flex-col justify-center items-center border-[5px] rounded-xl border-gray-700">
                        Ảnh
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurProductsMaterial;
