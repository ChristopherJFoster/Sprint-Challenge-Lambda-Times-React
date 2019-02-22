import React from "react";
import Tab from "./Tab";

const Tabs = ({ tabs, selectTabHandler, selectedTab }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {/* If the following gives the children warning, try Date.now() + index */}
        {tabs.map(tab => (
          <Tab
            key={Date.now()}
            tab={tab}
            selectTabHandler={selectTabHandler}
            selectedTab={selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.func.isRequired
};

export default Tabs;
