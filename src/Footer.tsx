import './App.css';

function Footer(): JSX.Element {
  return (
    <div className="footerDiv">
      <div className="footerInner">
        <div className="footerTop">
          지금 리클럽 회원이 되어 다양한 프로모션 기회를 놓치지 마세요!
        </div>
        <div className="footerContent">
          <div className="footerLeft">
            <div className="footerLogo">
              <img src="img/logo2.png" alt="로고"/>
            </div>
            <div className="footerInfo">
              <ul>
                <li>
                  <span>회사명 : 주식회사 LF</span>
                  <span>대표자 : 오규식, 김상균</span>
                  <span>주소 : 서울특별시 강남구 언주로 870 </span>
                </li>
                <li>
                  <span>사업자등록번호 : 211-87-87724</span>
                  <span>통신판매업신고번호 : 제 2010-서울강남-00066호</span>
                </li>
                <li>
                  <span>고객센터 : 1660-1895</span>
                  <span>
                    운영시간 : 09:00 - 18:00 (점심시간 12:00 ~ 13:00 / 주말 및
                    공휴일 휴무)
                  </span>
                </li>
                <li>
                  <span>이메일 : privacy@lfcorp.com </span>
                  <span>개인정보관리책임자 : 강승훈</span>
                </li>
                <li>
                  <span>Copyright ⓒ reebok All rights reserved.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerRight">
            <div className="rightContent">
              <h4>HELP</h4>
              <ul>
                <li>FAQ</li>
                <li>공지사항</li>
                <li>매장안내</li>
                <li>1:1문의내역</li>
                <li>매장개설문의</li>
              </ul>
            </div>
            <div className="rightContent">
              <h4>MP PAGE</h4>
              <ul>
                <li>주문배송조회</li>
                <li>취소/교환/반품</li>
                <li>회원정보 수정</li>
                <li>쿠폰</li>
              </ul>
            </div>
            <div className="rightContent">
              <ul className="rightSocial">
                <li>
                  <img src="img/social1.png" alt="페이스북"/>
                </li>
                <li>
                  <img src="img/social2.png" alt="인스타그램"/>
                </li>
                <li>
                  <img src="img/social3.png" alt="유튜브"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="bottomInner">
            <ul>
              <li>통합회원 이용약관</li>
              <li>개인정보 처리방침</li>s<li>읽기 쉬운 개인정보처리방침</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Footer;