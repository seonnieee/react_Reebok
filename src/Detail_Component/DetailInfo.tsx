import "../App.css";
import React from "react";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import { addItem } from "../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DetailProps } from "../DetailProduct";

interface CartPopUpProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function DetailInfo(props: DetailProps): JSX.Element {
  const { id } = useParams();
  const originPrice = props.detail[Number(id) - 1].itemPrice;
  const price = originPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const selproduct = props.detail.find((x) => x.id === Number(id));
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [mainImg, setMainImg] = useState(selproduct ? selproduct.mainImg : "");
  const navigate = useNavigate();

  const handleMouseClick = (newImg: string) => {
    console.log("handleMouseClick called with:", newImg);
    console.log("Main Image Updated:", newImg);
    setMainImg(newImg);
  };

  useEffect(() => {
    if (selproduct) {
      setMainImg(selproduct.mainImg);
    }
  }, [selproduct]);

  if (!selproduct) {
    return <div>없는 페이지입니다</div>;
  }

  return (
    <div className="detailInfo">
      <div className="detailInfoLeft">
        <img
          src={mainImg}
          style={{ width: "600px", height: "600px" }}
          alt="상품이미지"
        />
        <ul className="detailItemSmall">
          {selproduct.smallImg_set.map((ele: any, i) => {
            return (
              <li className="smallItemImg">
                <img
                  key={i}
                  src={ele.smallImg}
                  alt="상품이미지"
                  onClick={() => handleMouseClick(ele.smallImg)}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="detailInfoRight">
        <div className="detailTitle">
          <p className="itemCode">{selproduct.itemCode}</p>
          <h3 className="itemTitle">{selproduct.itemTitle}</h3>
          <div className="itemPrice">
            <span className="price">{price}</span>
            <span className="unit">원</span>
          </div>
        </div>
        <div className="detailColor">
          <p className="detailInfoTitle">색상</p>
          {selproduct.itemColor_set.map((ele, i) => {
            return <img key={i} src={ele.colorImg} alt="상품이미지" />;
          })}
        </div>
        <div className="detailShipInfo">
          <ul>
            <li className="shipContent">
              <p className="detailInfoTitle">배송비</p>
              <p className="detailInfoText">3만원 이상 무료배송</p>
            </li>
            <li className="shipContent">
              <p className="detailInfoTitle">제조사</p>
              <p className="detailInfoText">㈜LF</p>
            </li>
            <li className="shipContent">
              <p className="detailInfoTitle">카드혜택</p>
              <p className="detailInfoText">
                <strong>일반할부 12개월 가능</strong>
              </p>
            </li>
            <li className="shipContent">
              <p className="detailInfoTitle">구매혜택</p>
              <p className="detailInfoText">
                리클럽 가입시 신규, 생일 쿠폰/구매금액 5% 포인트 적립
              </p>
            </li>
          </ul>
        </div>
        <div className="detailSize">
          <p className="detailInfoTitle">사이즈</p>
          <ul className="detailSizeNum">
            {selproduct.itemSize_set.map((ele, i) => {
              return <li>{ele.size}</li>;
            })}
          </ul>
        </div>
        <div className="detailBtnBox">
          <Button
            className="detailCartBtn"
            onClick={() => {
              setModal(true);
              //  dispatch(addItem(  {id : 2,  imgurl : 'shoes1.jpg', name : 'Grey Yordan', count : 1}))
              dispatch(
                addItem({
                  id: selproduct.id,
                  mainImg: selproduct.mainImg,
                  itemTitle: selproduct.itemTitle,
                  price: selproduct.itemPrice,
                  count: 1,
                })
              );
            }}
          >
            CART
          </Button>

          <Button className="buyBtn">BUY NOW</Button>
          {modal === true ? <CartPopUp setModal={setModal}></CartPopUp> : null}
        </div>
        <div className="detailRelItem">
          <p>연관상품</p>
          <ul className="detailRelSwiper">
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={5}
              slidesPerView={5}
              slidesOffsetBefore={0}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper: any) => console.log(swiper)}
              scrollbar={{ draggable: true }}
            >
              {props.detail[Number(id) - 1].relImgMain_set.map((ele, i) => {
                return (
                  <SwiperSlide>
                    <li className="detailRelLi">
                      <div className="relImgBox">
                        <img
                          src={
                            props.detail[Number(id) - 1].relImgMain_set[i]
                              .relImg_main
                          }
                          style={{ width: "100px", height: "100px" }}
                          alt="상품이미지"
                        />
                        <img
                          src={
                            props.detail[Number(id) - 1].relImgHover_set[i]
                              .relImg_hover
                          }
                          style={{ width: "100px", height: "100px" }}
                          className="relHoverImg"
                          alt="상품이미지"
                        />
                      </div>

                      <p className="detailRelTitle">
                        {props.detail[Number(id) - 1].relTitle_set[i].relTitle}
                      </p>

                      <div className="relPriceBox">
                        <span className="relPrice">
                          {
                            props.detail[Number(id) - 1].relPrice_set[i]
                              .relPrice
                          }
                        </span>

                        <span className="relUnit">원</span>
                      </div>
                    </li>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CartPopUp(props: CartPopUpProps) {
  return (
    <div>
      <div className="popUpDiv">
        <h1 className="popUpTitle">장바구니 담기</h1>
        <div className="popUpInfo">
          <img
            src="../img/icon3.png"
            alt="장바구니"
            style={{ width: "40px", height: "45px" }}
          />
          <h3>장바구니에 상품이 담겼습니다.</h3>
          <p>바로 확인하시겠습니까?</p>
        </div>
        <div>
          <button
            onClick={() => {
              props.setModal(false);
            }}
            className="popUpCloseBtn"
          >
            취소
          </button>
          <Link to={"/cart/"}>
            <button className="popUpCartBtn">확인</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
