import "../App.css";
import { Nav, Navbar } from "react-bootstrap";

function DetailRefund():JSX.Element {
  return (
    <div>
      <div className="detailContentNav" id="refundBox">
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
            style={{ color: "#000" }}
            href="#qnaBox"
          >
            문의
          </Nav.Link>
          <Nav.Link
            className="detailNavText"
            style={{ borderBottom: "2px solid #000", color: "#000" }}
            href="#refundBox"
          >
            배송/교환/반품
          </Nav.Link>
        </Navbar>
      </div>
      <div className="detailSubBox">
        <div className="detailSubTitle">
          <span>배송 정보</span>
        </div>
        <div className="detailRefundText">
          <h4>[배송기간]</h4>
          <p>
            - 평균 2~4일 배송기간이 소요됩니다.
            <br />
            - 물류센터 재고 부족 시 재고가 있는 매장에서 재고 확보 후 배송되므로
            5~7일이 소요될 수 있습니다.
            <br />- 다수 채널에서 동시 판매되고 있으므로, 결제완료 후에도 품절이
            될 수 있습니다.
          </p>
          <br />
          <h4>[배송비]</h4>
          <p>
            - 3만원 이상 무료배송, 3만원 미만 배송비 2,500원
            <br />- 일부 도서/산간 지역에는 배송비가 추가될 수 있습니다.
          </p>
        </div>
        <div className="detailSubTitle" style={{ marginTop: "80px" }}>
          <span>교환/반품</span>
        </div>
        <div className="detailRefundText">
          {/* 교환 및 반품안내 */}
          <h4>[교환 및 반품안내]</h4>
          <p>
            - 상품 수령 후 7일 이내 MY PAGE &gt; 주문목록/배송조회 &gt;
            교환신청/반품신청 버튼 클릭하여 교환/반품 접수 가능합니다.
          </p>
          <br />
          {/* 교환절차 */}
          <h4>[교환 절차]</h4>
          <p>
            - 교환신청 후 MY PAGE '&gt;' 1:1문의에서 교환신청 사유 작성
            부탁드립니다. 예） 사이즈 변경 100 → 95
            <br />
            - 교환배송비 입금 안내드리면 입금 부탁드립니다.
            <br />
            - 입금 확인 후 브랜드 측에서 순차적으로 택배사 자동회수 접수해
            드립니다.
            <br />
            - 1~2일 이내 기사님께서 고객님께 연락 후 방문하면 상품 전달
            부탁드립니다.
            <br />- 입고 후 교환 출고까지 2~3일 정도 소요될 수 있는 점 참고
            부탁드립니다.
          </p>
          <br />
          {/* 반품절차 */}
          <h4>[반품 절차]</h4>
          <p>
            - 반품신청 후 브랜드 측에서 순차적으로 확인하여 택배사 자동회수
            접수해드립니다.
            <br />
            - 1~2일 이내 기사님께서 고객님께 연락 후 방문하면 상품 전달
            부탁드립니다.
            <br />- 환불까지 반품상품 창고 입고 후 2~3일 정도 소요될 수 있는 점
            참고 부탁드립니다.
          </p>
          <br />
          {/* 교환반품 불가 사유 */}
          <h4>[교환 및 반품이 불가능한 경우]</h4>
          <p>
            - 상품 수령 후 7일이 지난 경우
            <br />
            - 상품 TAG이 제거되거나, 상품이 훼손된 경우
            <br />
            - 상품을 사용하거나 일부 소비하여 상품의 가치가 현저히 감소된 경우
            <br />
            - 구성품을 분실하였거나 포장 박스 등이 훼손된 경우
            <br />- 주문/제작 상품 중 반품/교환이 불가능하다고 안내된 경우
          </p>
          <br />
          {/* 교환 배송비 */}
          <h4>[교환 배송비]</h4>
          <p>
            - 교환 배송비 5,000원 발생되며 아래 계좌로 입금해 주시면 됩니다.
            <br />- 브랜드 계좌 : 우리은행 341-037258-01-001 (주) lf
          </p>
          <br />
          {/* 반품 배송비 */}
          <h4>[반품 배송비]</h4>
          <p>
            - 전체 반품시 왕복 배송비 차감 후 환불이 진행됩니다.
            <br />
            - 최초 배송비 2,500원 + 반품 배송비 2,500원
            <br />
            - 부분 반품시 편도 배송비 차감 후 환불이 진행됩니다.
            <br />
            - 단, 남은 금액이 무료배송 기준이 하일 경우, 최초 배송비를 포함한
            왕복 배송비 부과
            <br />
            - 무료 배송 기준 : 결제기준 구매금액 3만원 이상
            <br />- 일부 도서/산간 지역에는 배송비가 추가될 수 있습니다.
          </p>
          <br />
          {/* 불량 및 오배송시 */}
          <h4>[불량 및 오배송시]</h4>
          <p>
            - 브랜드 측에서 배송비 제공
            <br />
            - 불량 사유와 불량 사진을 첨부하여 MY PAGE &gt; 1:1문의에 작성해
            주시면 빠른 처리 도와드리겠습니다.
            <br />- 타 택배사를 통해 보내실 경우 비용은 고객님 부담이오니 이 점
            참고 부탁드립니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailRefund;
