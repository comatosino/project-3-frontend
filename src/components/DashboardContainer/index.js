import React, { Component } from "react";
import Dashboard from "../_pages/Dashboard";
import Footer from "../Footer"
import GameGroup from "../GameGroup"
import WalkGroup from "../WalkGroup"
import FavGroup from "../FavGroup"
import Card from "../Card"

import games from "../testData/games.json"
import walkthroughs from "../testData/walkthroughs.json"

class DashboardContainer extends Component {
  state = {
    games,
    walkthroughs
  };

  render() {
    return (
      <div>
        <Dashboard />

        <div className="grid grid-flow-col">
          <div className="col">
            <Card heading="Favorites">
              <FavGroup />
            </Card>
          </div>
          <div className="col">
            <GameGroup games={games} />
            <WalkGroup walkthroughs={walkthroughs} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashboardContainer;