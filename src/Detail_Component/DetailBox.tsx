import "../App.css";
import { useParams } from "react-router-dom";
import { Nav, Navbar, Table } from 'react-bootstrap';
import { DetailProps } from '../DetailProduct'

function DetailBox(props:DetailProps):JSX.Element {
  let { id } = useParams();
  return (
    <div>
      <div className="detailContentNav" id="detailBox">
        <Navbar className="detailNavbar">
          <Nav.Link
            className="detailNavText"
            style={{ borderBottom: "2px solid #000", color: "#000" }}
            href="#detailBox"
          >
            상품정보
          </Nav.Link>
          <Nav.Link
            className="detailNavText"
            style={{ color: "#000" }}
            href="#reviewBox"
          >
            리뷰
          </Nav.Link>
          <Nav.Link
            className="detailNavText"
            style={{ color: "#000" }}
            href="#qnaBox"
          >
            문의
          </Nav.Link>
          <Nav.Link
            className="detailNavText"
            style={{ color: "#000" }}
            href="#refundBox"
          >
            배송/교환/반품
          </Nav.Link>
        </Navbar>
      </div>
      <div className="detailBox">
        <div className="detailContentImgBox">
        {props.detail[Number(id) - 1].detailBox_Imgset.map((ele, i) => {
            return <img key={i} src={ele.detailBoxImg} alt="상품이미지" />;
          })}
        </div>
        <div className="detailContentText">
          <h3>상품필수 정보</h3>
          <Table className="detailTableStyle">
            <colgroup>
              <col style={{ width: "20%" }}></col>
              <col style={{ width: "80%" }}></col>
            </colgroup>
            <tbody>
              <tr>
                <th>제품 소재</th>
                <td>
                  {props.detail[Number(id) - 1].detailBox_Info}
                </td>
              </tr>
              <tr>
                <th>색상</th>
                <td>{props.detail[Number(id) - 1].detailBox_color}</td>
              </tr>
              <tr>
                <th>치수</th>
                <td>상세페이지 참고</td>
              </tr>
              <tr>
                <th>제조사(수입자/병행수입)</th>
                <td>㈜LF</td>
              </tr>
              <tr>
                <th>제조국</th>
                <td>베트남</td>
              </tr>
              <tr>
                <th>취급시 주의사항</th>
                <td>상세페이지참조</td>
              </tr>
              <tr>
                <th>품질보증기준</th>
                <td>
                  구매일로부터6개월간/그 외 기준은 관련법 및 소비자 분쟁해결
                  규정에 따름
                </td>
              </tr>
              <tr>
                <th>A/S 책임자와 전화번호</th>
                <td>LF 고객상담실 1544-5114</td>
              </tr>
              <tr>
                <th>종류</th>
                <td>상세페이지참조</td>
              </tr>
              <tr>
                <th>발길이</th>
                <td>상세페이지참조</td>
              </tr>
              <tr>
                <th>굽높이</th>
                <td>상세페이지참조</td>
              </tr>
              <tr>
                <th>해외사이즈</th>
                <td>상세페이지참조</td>
              </tr>
              <tr>
                <th>KC안전인증 대상 유무</th>
                <td>상세페이지참조</td>
              </tr>
              <tr>
                <th>상품무게</th>
                <td>상세페이지참조</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #000" }}>
                <th>상품 가로_세로_높이</th>
                <td>상세페이지참조</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default DetailBox;
