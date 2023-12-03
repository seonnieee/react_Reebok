import "./App.css";
import React from "react";
import { useState } from "react";
import DetailNav from "./Detail_Component/DetailNav";
import DetailInfo from "./Detail_Component/DetailInfo";
import DetailBox from "./Detail_Component/DetailBox";
import DetailReview from "./Detail_Component/DetailReview";
import DetailQna from "./Detail_Component/DetailQna";
import DetailRefund from "./Detail_Component/DetailRefund";
import data_detail from "./data_detail/data_detail";

interface smallImg {
  smallImg: string;
}

interface colorImg {
  colorImg: string;
}

interface size {
  size: string;
}

interface relImg_main {
  relImg_main?: string;
}

interface relImg_hover {
  relImg_hover?: string;
}

interface relTitle {
  relTitle?: string;
}

interface relPrice {
  relPrice?: string;
}

interface detailBoxImg {
  detailBoxImg: string;
}

export interface Data_detail {
  id: number;
  cate_f: string;
  cate_s: string;
  cate_t: string;
  mainImg: string;
  smallImg_set: smallImg[];
  itemCode: string;
  itemTitle: string;
  itemPrice: number;
  itemColor_set: colorImg[];
  itemSize_set: size[];
  relImgMain_set: relImg_main[];
  relImgHover_set: relImg_hover[];
  relTitle_set: relTitle[];
  relPrice_set: relPrice[];
  detailBox_Imgset: detailBoxImg[];
  detailBox_Info: string;
  detailBox_color: string;
}

export interface DetailProps {
  detail: Data_detail[];
}

function DetailProduct(): JSX.Element {
  let [detail] = useState<Data_detail[]>(data_detail);

  return (
    <div>
      <div className="bodyContent">
        <DetailNav detail={detail} />
        <DetailInfo detail={detail} />
        <DetailBox detail={detail} />
        <DetailReview />
        <DetailQna />
        <DetailRefund />
      </div>
    </div>
  );
}

export default DetailProduct;
