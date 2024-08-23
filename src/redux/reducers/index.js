import {combineReducers} from "redux";
import {activeTabReducer} from "~/redux/reducers/activeTab.js";

const allReducers = combineReducers({
  activeTab: activeTabReducer
  // Add more reducers here
})

export default allReducers;