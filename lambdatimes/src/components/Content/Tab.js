import React from "react";

const Tab = ({ tab, selectTabHandler, selectedTab }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={tab.tab === selectedTab ? "tab active-tab" : "tab"}
      onClick={
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        e => selectTabHandler(e, tab)
      }
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.func.isRequired
};

export default Tab;
