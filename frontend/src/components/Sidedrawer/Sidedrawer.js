
import { Link } from "react-router-dom";
import "./sidedrawer.css";

const Sidedrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show")
  }

  return (<div className={sideDrawerClass.join(" ")}>
    <ul className='sidedrawer__links'>
      <li>
        <Link to="/cart" >
          <i className="fas fa-shopping-cart"></i>
          <span>cart
            <span className='sidedrawer__cartbadge'>0</span>
          </span>

        </Link>
      </li>
      <li>
        <Link to="/">shop</Link>
      </li>
    </ul>
  </div>)
}

export default Sidedrawer
