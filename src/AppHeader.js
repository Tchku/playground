import "./AppHeader.css";
import { Button, Group, Divider } from "@mantine/core";
import { Link } from "react-router-dom";

export default function AppHeader({ timerType }) {
  return (
    <div className={`App-header-${timerType}`}>
      <div class="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="header-right">
          <a className="active" href="/home">
            Home
          </a>
          <Link to="/settings">Settings</Link>
          <Link to="#about">About</Link>
        </div>
      </div>
    </div>
  );
}
