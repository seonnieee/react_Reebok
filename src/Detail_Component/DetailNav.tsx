import '../App.css';
import { useParams } from "react-router-dom";
import { DetailProps } from '../DetailProduct'

function DetailNav(props:DetailProps):JSX.Element {
  let {id} = useParams();

  return (  

    <div className="detailNav">
      <ul>
        <li className="detailOb">{props.detail[(Number(id)-1)].cate_f}</li>
        <li className="detailOb">{props.detail[(Number(id)-1)].cate_s}</li>
        <li>{props.detail[(Number(id)-1)].cate_t}</li>
      </ul>
    </div>
  );}


export default DetailNav;