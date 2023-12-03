import "./App.css";
import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import store, {changeName, increase} from './store.js'
import { addCount, decreaseCount, deleteItem } from "./store";
import { Link } from "react-router-dom";
import { useState } from "react";

interface RootState{
  cart:{
  id:number;
  mainImg:string;
  itemTitle:string;
  price:number;
  count:number;
  }[];
}

function Cart():JSX.Element {
  const state = useSelector((state:RootState) => state);
  // dispatch는  store.js 로 요청보내주는 함수
  const dispatch = useDispatch();
  let totalsum = 0;
  for (let i = 0; i < state.cart.length; i++) {
    totalsum += state.cart[i].price * state.cart[i].count;
  }

  // 체크된 아이템을 담을 빈배열 준비
  const [checkItems, setCheckItems] = useState<number[]>([]);

  //  단일 체크박스 선택 핸들러
  const handleSingleCheck = (checked:boolean, id:number) => {
    if (checked) {
      setCheckItems((prev:number[]) => [...prev, id]); // 단일 선택 시 체크된 아이템을 배열에 추가함
    } else {
      setCheckItems(checkItems.filter((el) => el !== id)); // 단일 선택 해제 시, 해제된 아이템을 제외(필터)한 배열
    }
  };

  // 전체 체크박스 선택 핸들러
  const handleAllCheck = (checked:boolean) => {
    if (checked) {
      // 전체 선택 시, 데이터의 모든 아이템(id)를 담은 배열로 업데이트
      const idArray : number[] = [];
      state.cart.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]); // 전체 선택 해제 시, 빈 배열로 변경
    }
  };

  function deleteHandler() {
    dispatch({
      type: deleteItem,
      payload: { checkItems: checkItems},
    });
    // 초기화
    setCheckItems([]);
  }

  return (
    <>
      <div className="bodyContent">
        <div className="orderTitle">
          <h2>장바구니</h2>
        </div>
        <div className="orderProcess">
          <ul>
            <li style={{ color: "#000" }}>01 장바구니</li>
            <li style={{ color: "#000" }}>&gt;</li>
            <li>02 주문서작성 및 결제</li>
            <li>&gt;</li>
            <li>03 주문완료</li>
          </ul>
        </div>
        <div className="ordertableBox">
          <Table style={{ width: "100%", textAlign: "center" }}>
            <colgroup>
              <col style={{ width: "8%" }}></col>
              <col></col>
              <col style={{ width: "12%" }}></col>
              <col style={{ width: "18%" }}></col>
              <col style={{ width: "15%" }}></col>
            </colgroup>
            <thead>
              <tr className="orderThead">
                <th>
                  <input
                    type="checkbox"
                    id="totalchkbx"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={
                      checkItems.length === state.cart.length ? true : false
                    }
                  ></input>
                  <label htmlFor="totalchkbx"></label>
                </th>
                <th>상품/옵션정보</th>
                <th>수량</th>
                <th>상품금액</th>
                <th>상품선택</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((a, i) => (
                <tr key={i} style={{ height: "130px" }}>
                  <td>
                    <input
                      type="checkbox"
                      id={`checkbox-${i}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, state.cart[i].id)
                      }
                      checked={
                        checkItems.includes(state.cart[i].id) ? true : false
                      }
                    ></input>
                    <label htmlFor={`checkbox-${i}`}></label>
                  </td>
                  <td
                    style={{
                      borderRight: "1px solid#dedede",
                      textAlign: "left",
                    }}
                  >
                    <Link
                      to={`/detail/${state.cart[i].id}`}
                      className="cartInfoBox"
                    >
                      <img
                        src={`${state.cart[i].mainImg}`}
                        style={{ width: "70px", height: "70px" }}
                      alt="상품이미지"/>
                      <div className="cartInfo">
                        <span className="cartCupon">쿠폰적용</span>
                        <p className="cartTitle">{`${state.cart[i].itemTitle}`}</p>
                      </div>
                    </Link>
                  </td>
                  <td style={{ borderRight: "1px solid#dedede" }}>
                    <div className="cartUpDownBtn">
                      <button
                        onClick={() => {
                          dispatch(addCount(state.cart[i].id));
                        }}
                        style={{ marginRight: "10px" }}
                        className="cartBtn"
                      >
                        +
                      </button>
                      {state.cart[i].count}
                      <button
                        onClick={() => {
                          dispatch(decreaseCount(state.cart[i].id));
                        }}
                        style={{ marginLeft: "10px" }}
                        className="cartBtn"
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td style={{ borderRight: "1px solid#dedede" }}>
                    <p className="cartPrice">
                      {(
                        state.cart[i].price *
                        state.cart[i].count
                      )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                    <span className="cartPrice">원</span>
                  </td>
                  <td style={{ borderRight: "1px solid#dedede" }}>
                    <div className="cartBtnBox">
                      <button className="bottomBtn">바로구매</button>
                      <button className="bottomOptBtn">옵션변경</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="bottomBtnBox">
          <Link to={"/"}>
            <button className="bottomBtn">쇼핑 계속하기</button>
          </Link>
          <button className="bottomBtn" onClick={deleteHandler}>
            선택삭제
          </button>
        </div>
        <div className="bottomTotalBox">
          <ul className="bottomTotalUl">
            <li className="bottomTotalLi">
              <span>총 개의 상품금액</span>
              <div>
                <span style={{ fontWeight: "bold" }}>
                  {totalsum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span>원</span>
              </div>
            </li>
            <li className="bottomTotalLi">
              <img
                src="../img/icon4.png"
                alt="가격"
                className="bottomOrderIcon"
              />
            </li>
            <li className="bottomTotalLi">
              <span>배송비</span>
              <div>
                <span style={{ fontWeight: "bold" }}>0</span>
                <span>원</span>
              </div>
            </li>
            <li className="bottomTotalLi">
              <img
                src="../img/icon5.png"
                alt="가격"
                className="bottomOrderIcon"
              />
            </li>
            <li className="bottomTotalLi">
              <span>합계</span>
              <div>
                <span style={{ fontWeight: "bold" }}>
                  {totalsum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span>원</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bottomOrderBtnBox">
          <button className="bottomOrderBtn1">선택 상품 주문</button>
          <button className="bottomOrderBtn2">전체 상품 주문</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
