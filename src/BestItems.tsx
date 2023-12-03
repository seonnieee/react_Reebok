import "./App.css";
import { useNavigate } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import data_bestitem_men from './data_main/data_bestitem_men';
import data_bestitem_women from './data_main/data_bestitem_women';
import data_bestitem_kids from './data_main/data_bestitem_kids';
import data_bestitem_collaboration from './data_main/data_bestitem_collaboration';
import {TitleProps} from './App'

export interface Data_bestitem{
  id:number;
  title:string;
  imgUrl : string;
  subImgUrl :string;
  price:string;
}

interface Data_bestitem_Array {
  data:Data_bestitem[];
}

interface BestitemProps{
  bestseller:Data_bestitem_Array[];
}

function BestItems(props : TitleProps) : JSX.Element {
  const [bestseller] = useState<Data_bestitem_Array[]>([{data:data_bestitem_men},{data:data_bestitem_women},{data:data_bestitem_kids},{data:data_bestitem_collaboration}])

  return (
    <div className="itemContainer">
      <h4 className="itemTitle">{props.title.title}</h4>
      <div>        
        <TabContent bestseller={bestseller}/>
      </div>
    </div>
  );
}

function TabContent(props : BestitemProps) : JSX.Element {
  let [tap, setTap] = useState(0);
  let navigate = useNavigate();
  return [
    // BESTSELLER - Men탭
    <div>
      <Nav defaultActiveKey="link0" style={{ border: "none" }}>
          <Nav.Item>
            <Nav.Link className="itemNavLink" style={{color:"#000"}} onClick={() => {setTap(0);}} eventKey="link0">
              Men
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="itemNavLink" onClick={() => {setTap(1);}} eventKey="link0">
              Women
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="itemNavLink" onClick={() => {setTap(2);}} eventKey="link0">
              kids
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="itemNavLink" onClick={() => {setTap(3);}} eventKey="link0">
              Collaboration
            </Nav.Link>
          </Nav.Item>
        </Nav>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={15}
        slidesPerView={4}
        slidesOffsetBefore={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper:any) => console.log(swiper)}
        scrollbar={{ draggable: true }}
      >
        {props.bestseller[0].data.map((ele, i:number) => {
          return (
            <SwiperSlide>
              <Nav.Link onClick={() => {navigate('/detail/' + (props.bestseller[0].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
              <li className="itemLi">
                <div>
                <div className="itemImgBox">
                  <img
                    src={props.bestseller[0].data[i].imgUrl}
                    style={{ width: "435px", height: "435px" }}
                  alt="상품이미지"/>
                  <img
                    src={props.bestseller[0].data[i].subImgUrl}
                    style={{ width: "435px", height: "435px" }}
                    className="itemHoverImg" alt="상품이미지"/>
                  </div>
                  <h4 className="itemsTitle">{props.bestseller[0].data[i].title}</h4>
                  <span className="itemsPrice">{props.bestseller[0].data[i].price}</span>
                  <span className="itemsUnit">원</span>
                </div>
              </li>
              </Nav.Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>,
    // BESTSELLER - Women탭
    <div>
    <Nav defaultActiveKey="link0" style={{ border: "none" }}>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(0);}} eventKey="link0">
            Men
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" style={{color:"#000"}}  onClick={() => {setTap(1);}} eventKey="link0">
            Women
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(2);}} eventKey="link0">
            kids
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(3);}} eventKey="link0">
            Collaboration
          </Nav.Link>
        </Nav.Item>
      </Nav>

    <Swiper
      modules={[Scrollbar]}
      spaceBetween={15}
      slidesPerView={4}
      slidesOffsetBefore={30}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper:any) => console.log(swiper)}
      scrollbar={{ draggable: true }}
    >
      {props.bestseller[1].data.map((ele, i:number) => {
        return (
          <SwiperSlide>
            <Nav.Link onClick={() => {navigate('/detail/' + (props.bestseller[1].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
            <li className="itemLi">
              <div>
              <div className="itemImgBox">
                <img
                  src={props.bestseller[1].data[i].imgUrl}
                  style={{ width: "435px", height: "435px" }}
                  alt="상품이미지"/>
                <img
                  src={props.bestseller[1].data[i].subImgUrl}
                  style={{ width: "435px", height: "435px" }}
                  className="itemHoverImg" alt="상품이미지"/>
                </div>
                <h4 className="itemsTitle">{props.bestseller[1].data[i].title}</h4>
                <span className="itemsPrice">{props.bestseller[1].data[i].price}</span>
                <span className="itemsUnit">원</span>
              </div>
            </li>
            </Nav.Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>,
    // BESTSELLER- kids탭
    <div>
    <Nav defaultActiveKey="link0" style={{ border: "none" }}>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(0);}} eventKey="link0">
            Men
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(1);}} eventKey="link0">
            Women
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" style={{color:"#000"}} onClick={() => {setTap(2);}} eventKey="link0">
            kids
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(3);}} eventKey="link0">
            Collaboration
          </Nav.Link>
        </Nav.Item>
      </Nav>

    <Swiper
      modules={[Scrollbar]}
      spaceBetween={15}
      slidesPerView={4}
      slidesOffsetBefore={30}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper:any) => console.log(swiper)}
      scrollbar={{ draggable: true }}
    >
      {props.bestseller[2].data.map((ele, i:number) => {
        return (
          <SwiperSlide>
            <Nav.Link onClick={() => {navigate('/detail/' + (props.bestseller[2].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
            <li className="itemLi">
              <div>
              <div className="itemImgBox">
                <img
                  src={props.bestseller[2].data[i].imgUrl}
                  style={{ width: "435px", height: "435px" }}
                  alt="상품이미지"/>
                <img
                  src={props.bestseller[2].data[i].subImgUrl}
                  style={{ width: "435px", height: "435px" }}
                  className="itemHoverImg" alt="상품이미지"/>
                </div>
                <h4 className="itemsTitle">{props.bestseller[2].data[i].title}</h4>
                <span className="itemsPrice">{props.bestseller[2].data[i].price}</span>
                <span className="itemsUnit">원</span>
              </div>
            </li>
            </Nav.Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>,  
    // BESTSELLER - Collaboration탭
    <div>
    <Nav defaultActiveKey="link0" style={{ border: "none" }}>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(0);}} eventKey="link0">
            Men
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(1);}} eventKey="link0">
            Women
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" onClick={() => {setTap(2);}} eventKey="link0">
            kids
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="itemNavLink" style={{color:"#000"}} onClick={() => {setTap(3);}} eventKey="link0">
            Collaboration
          </Nav.Link>
        </Nav.Item>
      </Nav>

    <Swiper
      modules={[Scrollbar]}
      spaceBetween={15}
      slidesPerView={4}
      slidesOffsetBefore={30}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper:any) => console.log(swiper)}
      scrollbar={{ draggable: true }}
    >
      {props.bestseller[3].data.map((ele, i:number) => {
        return (
          <SwiperSlide>
             <Nav.Link onClick={() => {navigate('/detail/' + (props.bestseller[3].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
            <li className="itemLi">
              <div>
              <div className="itemImgBox">
                <img
                  src={props.bestseller[3].data[i].imgUrl}
                  style={{ width: "435px", height: "435px" }}
                  alt="상품이미지"/>
                <img
                  src={props.bestseller[3].data[i].subImgUrl}
                  style={{ width: "435px", height: "435px" }}
                  className="itemHoverImg" alt="상품이미지"/>
                </div>
                <h4 className="itemsTitle">{props.bestseller[3].data[i].title}</h4>
                <span className="itemsPrice">{props.bestseller[3].data[i].price}</span>
                <span className="itemsUnit">원</span>
              </div>
            </li>
            </Nav.Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>,   
  ][tap];
}

export default BestItems;
