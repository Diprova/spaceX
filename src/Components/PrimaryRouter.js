import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import Capsules from "./Tabs/Capsules";
import Cores from "./Tabs/Cores";
import Dragons from "./Tabs/Dragons";
import History from "./Tabs/History";
import Info from "./Tabs/Info";
import Landingpads from "./Tabs/Landingpads";
import Launches from "./Tabs/Launches";
import Launchpads from "./Tabs/Launchpads";
import Missions from "./Tabs/Missions";
import Payloads from "./Tabs/Payloads";
import Roadsters from "./Tabs/Roadsters";
import Rockets from "./Tabs/Rockets";
import Ships from "./Tabs/Ships";
import "./components.css";

const Tabs = ({ name, activeState }) => {
  return <li className={activeState === name ? "active" : "tab"}>{name}</li>;
};

const PrimaryRouter = () => {
  const [activeState, setActiveState] = useState("CAPSULES");
  const [spaceData, setSpaceData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/${activeState}`)
      .then((data) => {
        setSpaceData(data.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, [activeState]);

  return (
    <div>
      <ul>
        <Link to="/" onClick={() => setActiveState("CAPSULES")}>
          <Tabs name={"CAPSULES"} activeState={activeState} />
        </Link>

        <Link to="/cores" onClick={() => setActiveState("CORES")}>
          <Tabs name={"CORES"} activeState={activeState} />
        </Link>

        <Link to="/dragons" onClick={() => setActiveState("DRAGONS")}>
          <Tabs name={"DRAGONS"} activeState={activeState} />
        </Link>

        <Link to="/history" onClick={() => setActiveState("HISTORY")}>
          <Tabs name={"HISTORY"} activeState={activeState} />
        </Link>

        <Link to="/info" onClick={() => setActiveState("INFO")}>
          <Tabs name={"INFO"} activeState={activeState} />
        </Link>

        <Link to="/landingpads" onClick={() => setActiveState("LANDPADS")}>
          <Tabs name={"LAND PADS"} activeState={activeState} />
        </Link>

        <Link to="/launches" onClick={() => setActiveState("LAUNCHES")}>
          <Tabs name={"LAUNCHES"} activeState={activeState} />
        </Link>

        <Link to="/launchpads" onClick={() => setActiveState("LAUNCHPADS")}>
          <Tabs name={"LAUNCH PADS"} activeState={activeState} />
        </Link>

        <Link to="/missions" onClick={() => setActiveState("MISSIONS")}>
          <Tabs name={"MISSIONS"} activeState={activeState} />
        </Link>

        <Link to="/payloads" onClick={() => setActiveState("PAYLOADS")}>
          <Tabs name={"PAYLOADS"} activeState={activeState} />
        </Link>

        <Link to="/rockets" onClick={() => setActiveState("ROCKETS")}>
          <Tabs name={"ROCKETS"} activeState={activeState} />
        </Link>

        <Link to="/roadsters" onClick={() => setActiveState("ROADSTER")}>
          <Tabs name={"ROADSTER"} activeState={activeState} />
        </Link>

        <Link to="/ships" onClick={() => setActiveState("SHIPS")}>
          <Tabs name={"SHIPS"} activeState={activeState} />
        </Link>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          component={() => <Capsules spaceData={spaceData} />}
        />
        <Route
          exact
          path="/cores"
          component={() => <Cores spaceData={spaceData} />}
        />
        <Route
          exact
          path="/dragons"
          component={() => <Dragons spaceData={spaceData} />}
        />
        <Route
          exact
          path="/history"
          component={() => <History spaceData={spaceData} />}
        />
        <Route
          exact
          path="/info"
          component={() => <Info spaceData={spaceData} />}
        />
        <Route
          exact
          path="/landingpads"
          component={() => <Landingpads spaceData={spaceData} />}
        />
        <Route
          exact
          path="/launches"
          component={() => <Launches spaceData={spaceData} />}
        />
        <Route
          exact
          path="/launchpads"
          component={() => <Launchpads spaceData={spaceData} />}
        />
        <Route
          exact
          path="/missions"
          component={() => <Missions spaceData={spaceData} />}
        />
        <Route
          exact
          path="/payloads"
          component={() => <Payloads spaceData={spaceData} />}
        />
        <Route
          exact
          path="/roadsters"
          component={() => <Roadsters spaceData={spaceData} />}
        />
        <Route
          exact
          path="/rockets"
          component={() => <Rockets spaceData={spaceData} />}
        />
        <Route
          exact
          path="/ships"
          component={() => <Ships spaceData={spaceData} />}
        />
      </Switch>
    </div>
  );
};

export default PrimaryRouter;
