import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import data_insta from './data_main/data_insta';

export interface Data_insta {
  imgUrl : string;
}
function Insta(): JSX.Element {
  const [insta] = useState<Data_insta[]>(data_insta);

  return (
    <div className="instaDiv">
      <h4 className="title2">INSTAGRAM</h4>
      <span className="instaaddress">@reebokkorea</span>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={15}
        slidesPerView={6}
        slidesOffsetBefore={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper:any) => console.log(swiper)}
        scrollbar={{ draggable: true }}
      >
        {insta.map((ele, i) => {
          return (
            <SwiperSlide>
              <li className="instaLi">
                <div>
                  <img
                    src={insta[i].imgUrl}
                    style={{ width: "285px", height: "355px" }}
                    alt="상품" />
                </div>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Insta;
