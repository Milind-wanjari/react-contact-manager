import {
  ALL_CONTACTS,
  ADD_CONTACTS,
  GET_CONTACTS,
  DELETE_CONTACTS,
  EDIT_CONTACTS,
  SEARCH_CONTACTS
} from "../Actions/ActionTypes";
//import { combineReducers } from "redux";
const initialState = {
  contacts: [],
  contact: {}
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CONTACTS:
      return { ...state, contacts: action.payload };
    case ADD_CONTACTS:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case GET_CONTACTS:
      return { ...state, contact: action.payload };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          contacts => contacts.id !== action.payload
        )
      };
    case EDIT_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    case SEARCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
