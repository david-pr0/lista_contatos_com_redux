import { combineReducers } from "redux"
import contactSlice from "./Contacts/slice"

const rootReducer = combineReducers({ contactSlice })

export default rootReducer