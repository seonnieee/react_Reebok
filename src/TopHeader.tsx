import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TopHeader(): JSX.Element{
  let navigate=useNavigate();
  return(
  <div className="topApp">
    <div className="top">
      <span>리복코리아 공식 온라인스토어</span>
      <Navbar className="topNav">
        <Nav.Link onClick={()=>{navigate('/login/')}} className="topNavLink">로그인</Nav.Link>
        <Nav.Link className="topNavLink">회원가입</Nav.Link>
        <Nav.Link className="topNavLink">고객센터</Nav.Link>
        <Nav.Link className="topNavLink">공지사항</Nav.Link>
      </Navbar>
    </div>
    <div className="navContainer">
      <div className="navWrap">
        <Link to='/'>
          <Navbar.Brand  className="navLogo" >
            <img src="img/logo1.png" style={{ width: "70px" }} alt="로고" />
          </Navbar.Brand>
        </Link>
        <Nav className="navList">
          <Nav.Link
            className="navListLink"
            onClick={() => {navigate('/detail/47')}}
          >
            Men
          </Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail/71')}} className="navListLink">Woman</Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail/19')}} className="navListLink">Kids</Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail/25')}} className="navListLink">Collaboration</Nav.Link>
          <Nav.Link className="navListLink">런칭캘린더</Nav.Link>
        </Nav>
        <Nav className="navIcon">
          <Nav.Link href="#search">
            <img
              src="img/icon1.png"
              style={{ width: "20px", height: "20px" }}
              alt="상품"/>
          </Nav.Link>
          <Nav.Link href="#search">
            <img
              src="img/icon2.png"
              style={{ width: "20px", height: "20px" }}
              alt="상품"/>
          </Nav.Link>
          <Nav.Link onClick={() => {navigate('/cart/')}}>
            <img
              src="img/icon3.png"
              style={{ width: "20px", height: "20px" }}
              alt="상품"/>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  </div>
)}

export default TopHeader;
