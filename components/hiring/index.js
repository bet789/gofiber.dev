import React from "react";
import ItemCareer from "../common/item-career";

function Hiring() {
  const dataIT = [
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-it-mobile-app.jpg",
      position: "IT Mobile Apps",
    },
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-it-website.jpg",
      position: "IT Website",
    },
  ];

  const dataTT = [
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-content.jpg",
      position: "Content Truyền Thông",
    },
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-quan-ly-hr.jpg",
      position: "Quản Lý PR",
    },
  ];

  const dataMKT = [
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-digital-marketing1.png",
      position: "Digital Marketing",
    },
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-seo1.jpg",
      position: "SEO",
    },
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-fb-ads.jpg",
      position: "Facebook ADS",
    },
    {
      img: "https://gofiber.b-cdn.net/tuyen-dung-gg-ads.jpg",
      position: "Google ADS",
    },
  ];

  return (
    <>
      <div className="py-4 bg-slate-50 px-2">
        <div className="container mx-auto">
          <h2 className="uppercase text-4xl font-bold text-center mb-0 py-4 lg:leading-snug">
            TUYỂN DỤNG
          </h2>
          <div>
            <h3 className="text-2xl text-center font-medium py-2 lg:text-3xl lg:text-left">
              Phòng nghiên cứu và phát triển
            </h3>
            <ItemCareer data={dataIT} />
          </div>
          <div>
            <h3 className="text-2xl text-center font-medium py-2 lg:text-3xl lg:text-left">
              Phòng Truyền Thông
            </h3>
            <ItemCareer data={dataTT} />
          </div>
          <div>
            <h3 className="text-2xl text-center font-medium py-2 lg:text-3xl lg:text-left">
              Phòng Marketing
            </h3>
            <ItemCareer data={dataMKT} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiring;
