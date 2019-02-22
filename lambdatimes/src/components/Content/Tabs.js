import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {/* I'm not sure if key={Date.now() + index} is better than just key={index}. */}
        {tabs.map((tab, index) => (
          <Tab
            key={Date.now() + index}
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
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tabs;
