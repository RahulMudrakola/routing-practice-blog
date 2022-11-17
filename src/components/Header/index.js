// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="container1">
    <div className="img-name">
      <img
        alt="wave"
        className="image-wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="list-item">
      <li className="list">
        <Link to="/">Home</Link>
      </li>
      <li className="list">
        <Link to="/about">About</Link>
      </li>
      <li className="list">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
