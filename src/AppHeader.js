import "./AppHeader.css";
import { Button, Group, Divider } from "@mantine/core";

export default function AppHeader({ timerType }) {
  return (
    <div className={`App-header-${timerType}`}>
      <div class="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="/settings">Settings</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}
