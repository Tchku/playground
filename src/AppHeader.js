import "./AppHeader.css";
import { Link, NavLink } from "react-router-dom";

export default function AppHeader({ timerType }) {
  return (
    <>
      <div className={`App-header-${timerType}`}>
        <div className="header">
          <Link exact to="/home" className="logo">
            Personal Playground
          </Link>
          <div className="header-right">
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
