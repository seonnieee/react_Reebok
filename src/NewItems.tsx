import "./App.css";
import { useNavigate} from 'react-router-dom'
import { Nav } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import data_newitem_men from "./data_main/data_newitem_men";
import data_newitem_women from "./data_main/data_newitem_women";
import data_newitem_kids from "./data_main/data_newitem_kids";
import data_newitem_collaboration from './data_main/data_newitem_collaboration';
import {TitleProps} from './App'

export interface Data_newitem{
  id:number;
  title:string;
  imgUrl : string;
  subImgUrl :string;
  price:string;
}

interface Data_Newitem_Array {
  data:Data_newitem[];
}

interface NewitemProps{
  items:Data_Newitem_Array[];
}

function NewItems(props: TitleProps): JSX.Element {
  const [items] = useState<Data_Newitem_Array[]>([{data:data_newitem_men}, {data: data_newitem_women}, {data:data_newitem_kids} , {data:data_newitem_collaboration}]);

  return (
    <div className="itemContainer">
      <h4 className="itemTitle">{props.title.title}</h4>
      <div>        
        <TabContent items={items} />
      </div>
    </div>
  );
}

function TabContent(props: NewitemProps): JSX.Element {
  let [tap, setTap] = useState(0);
  let navigate = useNavigate();

  return [
    // NEWALLIVALS - Men탭
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
        {props.items[0].data.map((ele, i:number) => {
          return (
            <SwiperSlide key={i}>
               <Nav.Link onClick={() => {navigate('/detail/' + (props.items[0].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
              <li className="itemLi">
                <div>
                <div className="itemImgBox">
                  <img
                    src={props.items[0].data[i].imgUrl}
                    style={{ width: "435px", height: "435px" }}
                    alt="상품" />
                  <img
                    src={props.items[0].data[i].subImgUrl}
                    style={{ width: "435px", height: "435px" }}
                    className="itemHoverImg" alt="상품" />
                  </div>
                  <h4 className="itemsTitle">{props.items[0].data[i].title}</h4>
                  <span className="itemsPrice">{props.items[0].data[i].price}</span>
                  <span className="itemsUnit">원</span>
                </div>
              </li>
              </Nav.Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>,
    // NEWALLIVALS - Women탭
    <div>
      <Nav defaultActiveKey="link0" style={{ border: "none" }}>
          <Nav.Item>
            <Nav.Link className="itemNavLink" onClick={() => {setTap(0);}} eventKey="link0">
              Men
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="itemNavLink" style={{color:"#000"}} onClick={() => {setTap(1);}} eventKey="link0">
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
        {props.items[1].data.map((ele, i:number) => {
          return (
            <SwiperSlide>
              <Nav.Link onClick={() => {navigate('/detail/' + (props.items[1].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
              <li className="itemLi">
                <div>
                <div className="itemImgBox">
                  <img
                    src={props.items[1].data[i].imgUrl}
                    style={{ width: "435px", height: "435px" }}
                    alt="상품" />
                  <img
                    src={props.items[1].data[i].subImgUrl}
                    style={{ width: "435px", height: "435px" }}
                    className="itemHoverImg" alt="상품" />
                  </div>
                  <h4 className="itemsTitle">{props.items[1].data[i].title}</h4>
                  <span className="itemsPrice">{props.items[1].data[i].price}</span>
                  <span className="itemsUnit">원</span>
                </div>
              </li>
              </Nav.Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>,
    // NEWALLIVALS - kids탭
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
        {props.items[2].data.map((ele, i:number) => {
          return (
            <SwiperSlide>
              <Nav.Link onClick={() => {navigate('/detail/' + (props.items[2].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
              <li className="itemLi">
                <div>
                <div className="itemImgBox">
                  <img
                    src={props.items[2].data[i].imgUrl}
                    style={{ width: "435px", height: "435px" }}
                    alt="상품" />
                  <img
                    src={props.items[2].data[i].subImgUrl}
                    style={{ width: "435px", height: "435px" }}
                    className="itemHoverImg" alt="상품" />
                  </div>
                  <h4 className="itemsTitle">{props.items[2].data[i].title}</h4>
                  <span className="itemsPrice">{props.items[2].data[i].price}</span>
                  <span className="itemsUnit">원</span>
                </div>
              </li>
              </Nav.Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>,
    // NEWALLIVALS - Collaboration탭
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
        {props.items[3].data.map((ele, i:number) => {
          return (
            <SwiperSlide>
               <Nav.Link onClick={() => {navigate('/detail/' + (props.items[3].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
              <li className="itemLi">
                <div>
                  <div className="itemImgBox">
                  <img
                    src={props.items[3].data[i].imgUrl}
                    style={{ width: "435px", height: "435px" }}
                    alt="상품" />
                  <img
                    src={props.items[3].data[i].subImgUrl}
                    style={{ width: "435px", height: "435px" }}
                    className="itemHoverImg" alt="상품" />
                  </div>
                  <h4 className="itemsTitle">{props.items[3].data[i].title}</h4>
                  <span className="itemsPrice">{props.items[3].data[i].price}</span>
                  <span className="itemsUnit">원</span>
                  
                </div>
              </li>
              </Nav.Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ][tap];
}

export default NewItems;
