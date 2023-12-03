import '../App.css';
import { Nav, Navbar, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

function DetailReview():JSX.Element {
  return (
    <div>
      <div className="detailContentNav" id="reviewBox">
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
            style={{ borderBottom: "2px solid #000", color: "#000" }}
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
      <div className="detailSubBox">
        <div className="detailSubTitle">
          <span>REVIEW (0)</span>
          <p>전체상품리뷰보기</p>
        </div>
        <div className="reviewContent">
          <div className="reviewLeft">
            <div className="reviewSummary">
              <img src="../img/star_icon1.png" alt="점수" />
              <span>-</span>
            </div>
            <Button variant="dark" className="reviewBtn">
              상품 리뷰 작성하기
            </Button>
          </div>
          <div className="reviewRight">
            <ul>
              <li className="reviewProgress">
                <span className="reviewProgressTitle">아주 좋아요</span>
                <ProgressBar
                  now={0}
                  style={{ width: "550px", height: "12px" }}
                />
                <span>0</span>
              </li>
              <li className="reviewProgress">
                <span className="reviewProgressTitle">맘에 들어요</span>
                <ProgressBar
                  now={0}
                  style={{ width: "550px", height: "12px" }}
                />
                <span>0</span>
              </li>
              <li className="reviewProgress">
                <span className="reviewProgressTitle">보통이에요</span>
                <ProgressBar
                  now={0}
                  style={{ width: "550px", height: "12px" }}
                />
                <span>0</span>
              </li>
              <li className="reviewProgress">
                <span className="reviewProgressTitle">그냥 그래요</span>
                <ProgressBar
                  now={0}
                  style={{ width: "550px", height: "12px" }}
                />
                <span>0</span>
              </li>
              <li className="reviewProgress">
                <span className="reviewProgressTitle">별로예요</span>
                <ProgressBar
                  now={0}
                  style={{ width: "550px", height: "12px" }}
                />
                <span>0</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="reviewSearch">
          <ul>
            <li style={{ color: "#14161a" }}>추천순</li>
            <li>최신순</li>
            <li>별점순</li>
          </ul>
          <div className="searchBox">
            <img src="../img/icon1.png" alt="돋보기" />
            <input type="text" placeholder="리뷰 키워드 검색" />
          </div>
        </div>
        <div className="detailSubText">
          <p>리뷰가 없습니다.</p>
          <p style={{ fontWeight: "bold" }}>리뷰를 작성해 보세요!</p>
        </div>
      </div>
    </div>
  );
}

export default DetailReview;
