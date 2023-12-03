import './App.css';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";



function Login(): JSX.Element{
    
    return (
      <div>
        <div className="bodyContent">
          <div className="loginTitle">
            <h2>로그인</h2>
          </div>
          <div className="loginInfoBox">
            <Form.Control
              className="loginInfo"
              type="text"
              placeholder="아이디"
            />
            <Form.Control
              className="loginInfo"
              type="text"
              placeholder="비밀번호"
            />
            <Button className="loginBtn" variant="dark">
              로그인
            </Button>
            <div className="loginId">
              <span>
                <input type="checkbox" id="savedId"></input>
                <label htmlFor="savedId"></label>
                <span className="savedId">아이디저장</span>
              </span>
              <span className="findId">아이디 / 비밀번호찾기</span>
            </div>
            <Button
              className="loginBtn"
              variant="warning"
              style={{ margin: "15px 0px" }}
            >
              <img
                src="../img/kakao.png"
                alt=""
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              카카오톡 1초 로그인/회원가입
            </Button>
            <div className="newMenberbox">
              <span className="newMember">회원가입</span>
              <span className="newMember">비회원 주문조회</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
