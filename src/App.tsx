import "./App.css";
import TopHeader from "./TopHeader";
import Slider from "./Slider";
import NewItems from "./NewItems";
import SectionCollection from './SectionCollection';
import BestItems from "./BestItems";
import Styling from "./Styling";
import ShopAll from "./ShopAll";
import Insta from "./Insta";
import Footer from "./Footer";
import DetailProduct from "./DetailProduct";
import Login from "./Login";
import data_title from "./data_main/data_title";
import Cart from "./Cart";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export interface Data_title {
  title: string;
  subtitle: string;
}

export interface TitleProps {
  title: Data_title;
}

function App(): JSX.Element {
  const [title] = useState<Data_title[]>(data_title);

  return (
    <div className="App">
      <TopHeader />
      <Routes>
        {/* 메인페이지 상단네비 'TopHeader.js'와 하단 'Footer.js'는 모든 Route에 적용함 */}
        <Route
          path="/"
          element={
            <div>
              <div className="bodyContent">
                <div className="slider">
                  <Slider />
                </div>
                <Title title={title[0]} />
                <div className="container">
                  <Button variant="secondary" className="titleBtn">
                    자세히보기
                  </Button>
                </div>
                <NewItems title={title[3]} />
                <SectionCollection title={title[5]} />
                <div className="banner">
                  <div className="bannervideobox">
                    <video muted autoPlay loop className="mw-100">
                      <source
                        src="img/slider/slider_video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <Title title={title[1]} />
                <BestItems title={title[4]} />
                <Styling />
                <Title title={title[2]} />
                <div className="container">
                  <Button variant="dark" className="stylingBtn">
                    전체보기
                  </Button>
                </div>
                <ShopAll />
                <Insta />
              </div>
            </div>
          }
        />
        {/* Detail 상품 */}
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Title(props: TitleProps): JSX.Element {
  return (
    <div className="title">
      <h4>{props.title.title}</h4>
      <p>{props.title.subtitle}</p>
    </div>
  );
}

export default App;
