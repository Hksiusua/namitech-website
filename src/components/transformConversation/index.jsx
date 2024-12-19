import React from "react";
import ReactECharts from "echarts-for-react";
import Swiper from "./swiper";

function TransformConversation() {
    const option = {
        series: [
          {
            type: "pie",
            radius: ["0%", "60%"],
            data: [
              {
                value: 100,
                itemStyle: {
                  color: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      { offset: 0, color: "#67C1FF" }, 
                      { offset: 1, color: "#004DFF" }, 
                    ],
                  },
                },
              },
            ],
            label: { show: false },
            emphasis: { scale: false },
          },
          {
            type: "pie",
            radius: ["21%", "73%"], 
            startAngle: 90, 
            endAngle: 360, 
            data: [
              {
                value: 100,
                itemStyle: {
                  color: {
                    type: "radial",
                    x: 0.4,
                    y: 0.5,
                    r: 0.1,
                    colorStops: [
                      { offset: 0, color: "rgba(132,192,254,0.8)" }, 
                    ],
                  },
                },
              },
            ],
            label: { show: false },
            emphasis: { scale: false },
            silent: true,
          },
        ],
      };          

  return (
    <div>
      <div className="w-full h-full grid grid-cols-12 bg-white relative px-10 gap-[16px] pt-[100px]">
        <div className="w-full h-full flex flex-col col-span-12 lg:col-span-6 relative">
          <div
            style={{
              border: "2px solid #fff",
              borderRadius: "15px",
              background: "#FBFBFB",
              position: "relative",
            }}
          >
            <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "#00BFFF",
                zIndex: 10,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                width: "1px",
                height: "100%",
                backgroundColor: "#00BFFF",
                zIndex: 10,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "calc(50% - 5px)",
                left: "calc(50% - 5px)",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#00BFFF",
                zIndex: 20,
              }}
            ></div>
            <div
              style={{
                  position: "absolute",
                  top: "20%", 
                  right: "0%", 
                  width: "50%",
                  height: "30%", 
                  background: `
                  radial-gradient(
                      circle at bottom left, 
                      rgba(0, 72, 240, 1), 
                      rgba(147,185,246,1),
                      rgba(239, 239, 241, 0.5), 
                      rgba(255, 255, 255, 0)
                  )
                  `,
                  filter: "blur(20px)",
                  zIndex: 5,
                  pointerEvents: "none",
              }}
              ></div>
          </div>
        </div>
      <div className="w-full h-full flex flex-col col-span-12 lg:col-span-6 px-[20px]">
        <div className="w-full h-fit flex flex-col items-start ">
          <h1
              style={{
              paddingBottom: "4px",
              fontSize: "48px",
              fontWeight: "bold",
              lineHeight: "1.2",
              background: "linear-gradient(90deg, #1E88E5, #AB47BC, #F06292, #E53935)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              }}
          >
              Transform Every <br />
              Conversation Into a <br />
              Strategic Edge <br />
          </h1>

          <p
              style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#4A4A4A",
              marginTop: "20px",
              maxWidth: "700px",
              }}
          >
              Reduce expenses, drive growth, and enhance customer satisfaction with a
              unified platform that seamlessly integrates human and AI agents, built
              to meet enterprise-level demands.
          </p>
        </div>
      </div>
    </div>
      <div >
        <Swiper/>
      </div>
    </div>
    
  );
}

export default TransformConversation;
