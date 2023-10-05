import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.bgMode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.textMode}`} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-a active text-${props.textMode} mx-2`}
                  aria-current="page"
                  to="/"
                >
                  {props.Home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-a text-${props.textMode} mx-2`} to="/about">
                  {props.About}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label className={`form-check-label text-${props.textMode} mx-2`} htmlFor="flexSwitchCheckDefault">
                  {props.modeName} Mode
                </label>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
  textMode : PropTypes.string,
  bgMode : PropTypes.string,
  toggleMode : PropTypes.func,
  modeName : PropTypes.string
};

Navbar.defaultProps = {
  title: "Text-utils",
  Home: "Home",
  About: "About Us",
};
