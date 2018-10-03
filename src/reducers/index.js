import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import {articles} from "./news"


export default combineReducers({
	articles,
	routing: routerReducer
})