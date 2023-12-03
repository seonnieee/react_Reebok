import "./App.css";

function ShopAll(): JSX.Element {
  return (
    <div className="shopallDiv">
      <h4 className="title2">SHOP ALL</h4>
      <div>
        <div className="row">
          <div className="col-md-4" style={{ marginTop: "30px" }}>
            <span className="shopallhover">
              <span className="shopalltext">MEN</span>
            </span>
            <img
              src="img/shopall/item1.jpg"
              style={{ width: "590px", height: "760px" }}
              alt="상품"
            />
          </div>
          <div className="col-md-4" style={{ marginTop: "30px" }}>
            <span className="shopallhover">
              <span className="shopalltext">WOMEN</span>
            </span>
            <img
              src="img/shopall/item2.jpg"
              style={{ width: "590px", height: "760px" }}
              alt="상품"
            />
          </div>
          <div className="col-md-4" style={{ marginTop: "30px" }}>
            <span className="shopallhover">
              <span className="shopalltext">COLLABORATION</span>
            </span>
            <img
              src="img/shopall/item3.jpg"
              style={{ width: "590px", height: "760px" }}
              alt="상품"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAll;
