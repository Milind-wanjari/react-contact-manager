import {
  ALL_CONTACTS,
  ADD_CONTACTS,
  GET_CONTACTS,
  DELETE_CONTACTS,
  EDIT_CONTACTS,
  SEARCH_CONTACTS
} from "./ActionTypes";
import axios from "axios";
export const allContact = () => {
  return async dispatch => {
    await axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      dispatch({
        type: "ALL_CONTACTS",
        payload: res.data
      });
    });
  };
};
export const searchContact = searchKeyword => {
  return async dispatch => {
    await axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const data = res.data;
      if (searchKeyword.length > 0) {
        data = data.filter(contacts =>
          contacts.name.toLowerCase().match(searchKeyword)
        );
      } else {
        data = res.data;
      }
      dispatch({
        type: "SEARCH_CONTACTS",
        payload: data
      });
    });
  };
};
export const addContact = contact => {
  return async dispatch => {
    await axios
      .post(`https://jsonplaceholder.typicode.com/users/`, contact)
      .then(res => {
        dispatch({
          type: "ADD_CONTACTS",
          payload: res.data
        });
      });
  };
};
export const getContact = id => {
  return async dispatch => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({
          type: "GET_CONTACTS",
          payload: res.data
        });
      });
  };
};
export const editContact = (contact, id) => {
  return async dispatch => {
    await axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, contact)
      .then(res => {
        dispatch({
          type: "EDIT_CONTACTS",
          payload: res.data
        });
      });
  };
};
export const deleteContact = id => {
  return async dispatch => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({
          type: "DELETE_CONTACTS",
          payload: id
        });
      });
  };
};

// export const allContact = () => {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(result => {
//         console.log(result);
//         const data= result;
//         dispatch({
//           type: "ALL_CONTACTS",
//           payload: result
//         });
//       });
//   };
// };
