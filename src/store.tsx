import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem{
  id:number;
  mainImg:string;
  itemTitle:string;
  price:number;
  count:number;
}

const cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 1,
      mainImg: "../img/detail/product1/item1_main1.jpg",
      itemTitle: "직 키네티카 2.5 엣지 - 차콜 / IG2738",
      price: 169000,
      count: 2,
    },
    {
      id: 5,
      mainImg: "../img/detail/product5/item5_main1.jpg",
      itemTitle: "BB 4000 II - 오프 화이트 / IF0674",
      price: 129000,
      count: 1,
    },
    {
      id: 13,
      mainImg: "../img/detail/product13/item13_main1.jpg",
      itemTitle: "펌프 크롭 패딩 자켓 (W) - 화이트",
      price: 279000,
      count: 1,
    },
  ] as CartItem[],
  reducers: {
    addCount(state, action:PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload; // 유효성 검사 // action.payload는 받아오는 값
      });
      console.log(num);
      state[num].count++;
    },
    decreaseCount(state, action:PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      console.log(num);
      if (state[num].count > 0) {
        state[num].count--;
      } else if (state[num].count === 0) {
        alert("상품이 더 이상 없습니다.");
      }
    },
    addItem(state, action:PayloadAction<CartItem>) {
      let num = state.findIndex((a) => a.id === action.payload.id);
      if (num !== -1) {
        state[num].count++;
      } else {
        state.push(action.payload);
      }
    },

    checkDelete(state, action:PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      if (num !== -1) {
        state.splice(num, 1);
      }
    },
    deleteItem(state, action:PayloadAction<{ checkItems: number[] }>) {
      action.payload.checkItems.forEach(function (v:number) {
        const idx = state.findIndex(function (o) {
          return o.id === v;
        });
        state.splice(idx, 1);
      });
    },
  },
});

// addCount(1)

export let { addCount, decreaseCount, addItem,  checkDelete, deleteItem} =
  cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});