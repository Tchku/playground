import "./AppHeader.css";
import { Button, Group, Divider } from "@mantine/core";
import { Link } from "react-router-dom";

export default function AppHeader({ timerType }) {
  return (
    <div className={`App-header-${timerType}`}>
      <div class="header">
        <Link to="/home" className="logo">
          Personal Playground
        </Link>
        <div className="header-right">
          <a className="active" href="/home">
            Home
          </a>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
