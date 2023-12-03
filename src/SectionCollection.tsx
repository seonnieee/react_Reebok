import "./App.css";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import data_collection_cclub from './data_main/data_collection_cclub';
import data_collection_heritage from './data_main/data_collection_heritage';
import data_collection_bb from './data_main/data_collection_bb';
import data_collection_vector from './data_main/data_collection_vector';
import data_title from './data_main/data_title';
import {TitleProps} from './App';

export interface Data_collection{
    id:number;
    title:string;
    imgUrl : string;
    subImgUrl :string;
    price:string;
  }

  interface Data_collection_Array {
    data:Data_collection[];
  }
  
  interface CollectionProps{
    collection:Data_collection_Array[];
  }

function SectionCollection(props : TitleProps) : JSX.Element {
  const [collection] = useState<Data_collection_Array[]>([{data:data_collection_cclub}, {data:data_collection_heritage}, {data:data_collection_bb}, {data:data_collection_vector}])

  return (
    <div>        
      <div className="collectionDiv">
      <h4 className="title2">{props.title.title}</h4>
       <TabContent collection={collection}/>    
    </div>
    </div>
  );
}

function TabContent(props : CollectionProps) : JSX.Element{
let [tap, setTap] = useState(0);
let navigate = useNavigate();
  return [
    // COLLECTION 섹션 - 1.CCLUB 탭
    <div>
    <div className="collectionTitleBox">     
      <Nav defaultActiveKey="link0" style={{ border: "none" }}>
        <Nav.Item>      
        <Nav.Link className="btnboxnavy" style={{color:"white"}}  onClick={() => {setTap(0);}} eventKey="link0">클럽C패밀리</Nav.Link>
        </Nav.Item>
        <Nav.Item>  
        <Nav.Link className="btnboxwhite" onClick={() => {setTap(1);}} eventKey="link0">헤리티지 바람막이</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="btnboxwhite" onClick={() => {setTap(2);}} eventKey="link0">BB 4000 II</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="btnboxwhite" onClick={() => {setTap(3);}} eventKey="link0">헤리티지 벡터 자켓</Nav.Link>
        </Nav.Item>
      </Nav>      
    </div>
    <div className="collectionBg">
      <img src="img/collection_cclub/bg1.jpg" />
      <div className="clubccontent">
        <h4>CLUB C FAMILY</h4>
        <p>always wears club c</p>
        <Swiper
          className="swiper2"
          modules={[Scrollbar]}
          spaceBetween={5}
          slidesPerView={3}
          slidesOffsetBefore={30}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper:any) => console.log(swiper)}
          scrollbar={{ draggable: true }}
        >
          {props.collection[0].data.map((ele, i:number) => {
            return (
              <SwiperSlide>
                 <Nav.Link onClick={() => {navigate('/detail/' + (props.collection[0].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
                <li className="collectionLi">
                  <div>
                    <div  className="collectionImgBox">
                    <img
                      src={props.collection[0].data[i].imgUrl}
                      style={{ width: "285px", height: "285px" }}
                    />
                     <img
                      src={props.collection[0].data[i].subImgUrl}
                      style={{ width: "285px", height: "285px" }}
                    className="collectionHoverImg" />
                    </div>
                    <h4 className="collectionTitle">{props.collection[0].data[i].title}</h4>
                    <span className="collectionPrice">{props.collection[0].data[i].price}</span>
                    <span className="collectionUnit">원</span>
                  </div>
                </li>
                </Nav.Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
    </div>,
     // COLLECTION 섹션 - 2.HERITAGE 탭
     <div>
     <div className="collectionTitleBox">
     <Nav defaultActiveKey="link0" style={{ border: "none" }}>
       <Nav.Item>      
       <Nav.Link className="btnboxwhite" onClick={() => {setTap(0);}} eventKey="link0">클럽C패밀리</Nav.Link>
       </Nav.Item>
       <Nav.Item>  
       <Nav.Link className="btnboxnavy" style={{color:"white"}} onClick={() => {setTap(1);}} eventKey="link0">헤리티지 바람막이</Nav.Link>
       </Nav.Item>
       <Nav.Item>
       <Nav.Link className="btnboxwhite" onClick={() => {setTap(2);}} eventKey="link0">BB 4000 II</Nav.Link>
       </Nav.Item>
       <Nav.Item>
       <Nav.Link className="btnboxwhite" onClick={() => {setTap(3);}} eventKey="link0">헤리티지 벡터 자켓</Nav.Link>
       </Nav.Item>
     </Nav>      
   </div>
   <div className="collectionBg">
     <img src="img/collection_heritage/bg1.jpg" />
     <div className="clubccontent">
       <h4>HERITAGE WINDBREAKER</h4>
       <p>FW 리복 바람막이 컬렉션</p>
       <Swiper
         className="swiper2"
         modules={[Scrollbar]}
         spaceBetween={5}
         slidesPerView={3}
         slidesOffsetBefore={30}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper:any) => console.log(swiper)}
         scrollbar={{ draggable: true }}
       >
         {props.collection[1].data.map((ele, i:number) => {
           return (
             <SwiperSlide>
                 <Nav.Link onClick={() => {navigate('/detail/' + (props.collection[1].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
               <li className="collectionLi">
                 <div>
                   <div  className="collectionImgBox">
                   <img
                     src={props.collection[1].data[i].imgUrl}
                     style={{ width: "285px", height: "285px" }}
                   />
                    <img
                     src={props.collection[1].data[i].subImgUrl}
                     style={{ width: "285px", height: "285px" }}
                   className="collectionHoverImg" />
                   </div>
                   <h4 className="collectionTitle">{props.collection[1].data[i].title}</h4>
                   <span className="collectionPrice">{props.collection[1].data[i].price}</span>
                   <span className="collectionUnit">원</span>
                 </div>
               </li>
               </Nav.Link>
             </SwiperSlide>
           );
         })}
       </Swiper>
     </div>
   </div>
   </div>,
   // COLLECTION 섹션 - 3.BB 4000 II 탭
   <div>
   <div className="collectionTitleBox">
   <Nav defaultActiveKey="link0" style={{ border: "none" }}>
     <Nav.Item>      
     <Nav.Link className="btnboxwhite" onClick={() => {setTap(0);}} eventKey="link0">클럽C패밀리</Nav.Link>
     </Nav.Item>
     <Nav.Item>  
     <Nav.Link className="btnboxwhite" onClick={() => {setTap(1);}} eventKey="link0">헤리티지 바람막이</Nav.Link>
     </Nav.Item>
     <Nav.Item>
     <Nav.Link className="btnboxnavy" style={{color:"white"}} onClick={() => {setTap(2);}} eventKey="link0">BB 4000 II</Nav.Link>
     </Nav.Item>
     <Nav.Item>
     <Nav.Link className="btnboxwhite" onClick={() => {setTap(3);}} eventKey="link0">헤리티지 벡터 자켓</Nav.Link>
     </Nav.Item>
   </Nav>      
 </div>
 <div className="collectionBg">
   <img src="img/collection_bb/bg1.jpg" />
   <div className="clubccontent">
     <h4>BB 4000 II</h4>
     <p>리복의 아이코닉 라이프스타일 스니커즈</p>
     <Swiper
       className="swiper2"
       modules={[Scrollbar]}
       spaceBetween={5}
       slidesPerView={3}
       slidesOffsetBefore={30}
       onSlideChange={() => console.log("slide change")}
       onSwiper={(swiper:any) => console.log(swiper)}
       scrollbar={{ draggable: true }}
     >
       {props.collection[2].data.map((ele, i:number) => {
         return (
           <SwiperSlide>
             <Nav.Link onClick={() => {navigate('/detail/' + (props.collection[2].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
             <li className="collectionLi">
               <div>
                 <div  className="collectionImgBox">
                 <img
                   src={props.collection[2].data[i].imgUrl}
                   style={{ width: "285px", height: "285px" }}
                 />
                  <img
                   src={props.collection[2].data[i].subImgUrl}
                   style={{ width: "285px", height: "285px" }}
                 className="collectionHoverImg" />
                 </div>
                 <h4 className="collectionTitle">{props.collection[2].data[i].title}</h4>
                 <span className="collectionPrice">{props.collection[2].data[i].price}</span>
                 <span className="collectionUnit">원</span>
               </div>
             </li>
             </Nav.Link>
           </SwiperSlide>
         );
       })}
     </Swiper>
   </div>
 </div>
 </div>,
  // COLLECTION 섹션 - 4.헤리티지 벡터 자켓 탭
  <div>
  <div className="collectionTitleBox">
  <Nav defaultActiveKey="link0" style={{ border: "none" }}>
    <Nav.Item>      
    <Nav.Link className="btnboxwhite" onClick={() => {setTap(0);}} eventKey="link0">클럽C패밀리</Nav.Link>
    </Nav.Item>
    <Nav.Item>  
    <Nav.Link className="btnboxwhite" onClick={() => {setTap(1);}} eventKey="link0">헤리티지 바람막이</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link className="btnboxwhite" onClick={() => {setTap(2);}} eventKey="link0">BB 4000 II</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link className="btnboxnavy" style={{color:"white"}} onClick={() => {setTap(3);}} eventKey="link0">헤리티지 벡터 자켓</Nav.Link>
    </Nav.Item>
  </Nav>      
</div>
<div className="collectionBg">
  <img src="img/collection_vector/bg1.jpg" />
  <div className="clubccontent">
    <h4>HERITAGE VECTOR JACKET</h4>
    <p>FW 리복 헤리티지 바시티 컬렉션</p>
    <Swiper
      className="swiper2"
      modules={[Scrollbar]}
      spaceBetween={5}
      slidesPerView={3}
      slidesOffsetBefore={30}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper:any) => console.log(swiper)}
      scrollbar={{ draggable: true }}
    >
      {props.collection[3].data.map((ele, i:number) => {
        return (
          <SwiperSlide>
             <Nav.Link onClick={() => {navigate('/detail/' + (props.collection[3].data[i].id))}} style={{textDecoration:"none", color:"#000"}}>
            <li className="collectionLi">
              <div>
                <div  className="collectionImgBox">
                <img
                  src={props.collection[3].data[i].imgUrl}
                  style={{ width: "285px", height: "285px" }}
                />
                 <img
                  src={props.collection[3].data[i].subImgUrl}
                  style={{ width: "285px", height: "285px" }}
                className="collectionHoverImg" />
                </div>
                <h4 className="collectionTitle">{props.collection[3].data[i].title}</h4>
                <span className="collectionPrice">{props.collection[3].data[i].price}</span>
                <span className="collectionUnit">원</span>
              </div>
            </li>
            </Nav.Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
</div>
</div>,

  ][tap];}

export default SectionCollection;
