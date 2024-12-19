import "./index.css"; 
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Drawer  } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, ArrowRightOutlined as CardArrow } from "@ant-design/icons";
import { UpSquareOutlined } from "@ant-design/icons";
const { Meta } = Card;
function ReasonNamitech(){
    const [visible, setVisible] = useState(false);
    const [isClosable, setIsClosable] = useState(false); 
    const [showCustomClose, setShowCustomClose] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 1024) {
            setIsClosable(true); 
            setShowCustomClose(false); 
          } else {
            setIsClosable(false); 
            setShowCustomClose(true); 
          }
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    const data = [
        {
          title: "Transform with Scale & Agility",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          title: "AI & RPA for Demand Forecasting",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          title: "Uplifting Multi-Cloud Security Posture",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image: "https://via.placeholder.com/400x200",
        },
      ];
  return(
    <div className="h-full lg:h-screen w-full ">
        <div className="w-full h-full grid grid-cols-12 p-[16px] bg-[#4675D8]">
            <div className="w-full h-full col-span-12 lg:col-span-4 flex flex-col justify-center items-center mt-[60px] mb-[40px]">
                <div className="relative w-[150px] h-[150px] flex justify-center items-center">
                <div className="absolute inset-[-55px] sm:inset-[-50px] lg:inset-[-70px] rounded-full border border-[rgba(255,255,255,0.2)] animate-spin-slow">
                        <div className="absolute top-1/4 left-[9px] w-[10px] h-[10px] bg-yellow-400 rounded-full"></div>
                        <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-red-500 rounded-full"></div>
                        <div className="absolute top-1/4 right-[10px] w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="absolute inset-[-20px] rounded-full border-[10px] "
                        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[4px] h-[10px] bg-[#4675D8]"></div>
                            <div className="absolute left-[-5px] top-1/4 w-[20px] h-[4px] bg-[#4675D8] rotate-[30deg]"></div>
                            <div className="absolute right-[-5px] top-1/4 w-[20px] h-[4px] bg-[#4675D8] rotate-[-30deg]"></div>
                        </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-400 animate-spin-slow"></div>
                    <div className="absolute inset-[1px] rounded-full bg-[#4675D8]"></div>
                        <svg
                        className="w-[80px] h-[80px] text-gray-300 z-10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 10v4a4 4 0 008 0v-4m2-2h2a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2h2m2-2h8m-4 12v4m-6 0h12"></path>
                        </svg>
                </div>
                <div className="mt-20">
                    <h2 className="text-2xl font-semibold border-t-[3px] border-b-[3px] border-white py-2 text-white">
                         WHY NAMITECH
                    </h2>
                </div>
            </div>
            <div className="w-full h-full col-span-12 lg:col-span-8 flex flex-col justify-center items-center border-[5px] rounded-lg p-[16px]"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                <div className="p-4 w-full ">
                    <h1 className="border-b-[1px] border-white text-white inline-block pb-2 text-2xl">
                        Case Study
                    </h1>
                </div>
                <div className="p-4 w-full">
                    <Row gutter={[16, 16]}>
                    {data.map((item, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                        <Card
                            hoverable
                            cover={<img alt={item.title} src={item.image} className="h-64 object-cover" />}
                            style={{ borderRadius: "12px", backgroundColor: "#3E5F8E" }}
                            bodyStyle={{ color: "#fff", padding: "16px", minHeight: "230px" }}
                        >
                            <Meta
                            title={<span style={{ color: "#fff", fontWeight: "bold" }}>{item.title}</span>}
                            description={
                                <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>{item.description}</span>
                            }
                            />
                            <div onClick={() => setVisible(true)}
                                style={{ position: "absolute", bottom: "16px", right: "16px", cursor: "pointer" }}>
                            <CardArrow
                                style={{
                                fontSize: "18px",
                                color: "rgba(255, 255, 255, 0.8)",
                                border: "1px solid rgba(255, 255, 255, 0.5)",
                                borderRadius: "50%",
                                padding: "6px",
                                transform: "rotate(-40deg)",
                                }}
                            />
                            </div>
                        </Card>
                        </Col>
                    ))}
                    </Row>
                </div>
                <div className="flex justify-end gap-4 w-full pr-[15px]">
                    <button className="w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.5)] rounded">
                        <ArrowLeftOutlined />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.5)] rounded">
                        <ArrowRightOutlined />
                    </button>
                </div>
            </div>                                    
        </div>
        <Drawer
        placement="right"
        closable={isClosable}
        onClose={() => setVisible(false)}
        visible={visible}
        width={700}
        bodyStyle={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "8px"
        }}
        maskStyle={{
            position: "relative",
        }}
        >
        {showCustomClose && (
            <div
                onClick={() => setVisible(false)}
                    style={{
                        position: "absolute",
                        top: "300px",
                        left: "-70px",
                        backgroundColor: "rgb(255, 252, 252)",
                        border: "1px solid rgba(255,255,255,0.5)",
                        color: "rgba(0, 0, 0, 0.8)",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        borderRadius: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        zIndex: 1000,
                    }}> X </div>)}
                <div className="w-full h-full grid grid-cols-12 bg-white gap-4">
                    <div className="w-full h-full flex flex-col col-span-12 lg:col-span-12 ">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-1">
                            <div className="bg-[#EE3E15] w-[full] h-[full] rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1565130838609-c3a86655db61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODU3MjA4Mjk&ixlib=rb-1.2.1&q=80&w=400"
                                    alt="Nature Example"
                                    className="w-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
                            <div className="col-span-2 "> 
                                <span className="font-semibold text-4xl">Transform with scare & Agility</span>
                            </div>
                            <div className="col-span-1 mt-[5px] flex lg:justify-end items-center pr-[20px]">
                                <div
                                style={{
                                width: "60px",
                                height: "60px",
                                backgroundColor: "black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "8px",
                                cursor: "pointer",
                                }}
                                >
                                <UpSquareOutlined style={{ fontSize: "24px", color: "white" }} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-8">
                            <div className="col-span-1">
                                <span>case study</span>
                            </div>
                            <div className="col-span-1">
                                <span>prudential</span>
                            </div>
                            <div className="col-span-1">
                                <span>prudential</span>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-1">
                            <span className="w-full border-b border-b-gray-500 border-b-solid"></span>
                        </div>
                        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3">
                            <div className="col-span-1">
                                <span>Nội dung</span>
                            </div>
                            <div className="col-span-2">
                                <p>Nội dung hay hấp dẫn nhất của namitech</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Drawer> 
    </div>
 )
}

export default ReasonNamitech