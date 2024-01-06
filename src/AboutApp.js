import "./App.css";
import { IconBarrierBlock, IconTrafficCone } from "@tabler/icons-react";
import AppHeader from "./AppHeader";

export default function AboutApp() {
  return (
    <div className="App">
      <header>
        <AppHeader timerType={"work"} />
      </header>
      <div className={`App-body-work`}>
        <div className={"Timer-container-work"}>
          <div>
            This page is under construction
            <p></p>
            <IconTrafficCone width={100} height={100} strokeWidth={1} />
            <IconBarrierBlock width={100} height={100} strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
