import '../App.css';
import { Nav, Navbar } from "react-bootstrap";

function DetailQna():JSX.Element {
  return (
    <div>
      <div className="detailContentNav" id="qnaBox">
        <Navbar className="detailNavbar">
          <Nav.Link
            className="detailNavText"
            style={{ color: "#000" }}
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
            style={{ borderBottom: "2px solid #000", color: "#000" }}
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
      <div className="detailSubBox">
        <div className="detailSubTitle">
          <span>총 문의 (0)</span>
          <p>문의쓰기</p>
        </div>
        <div className="detailSubText">
          <p>등록된 상품문의가 없습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default DetailQna;
