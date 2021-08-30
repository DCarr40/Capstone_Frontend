import * as actionTypes from "./notificationsConstants";

export const addToNotifications = (eventId) => async (dispatch, getState) => {
  /* 
  1.) take in eventId
  2.) add it to backend notifications
*/
  dispatch({
    type: actionTypes.ADD_TO_NOTIFICATION,
    payload: { event: eventId },
  });
};

export const removeFromNotifications = (eventId) => (dispatch, getState) => {
    /* 
  1.) take in eventId
  2.) remove it from backend notifications
*/
  dispatch({
    type: actionTypes.REMOVE_FROM_NOTIFICATION,
    payload: {event:eventId}
  });
};

export const loadCurrentNotifications = (eventId) => (dispatch, getState) => {
  /* 
1.) take in eventId
2.) add it to backend notifications
*/
dispatch({
  type: actionTypes.LOAD_CURRENT_NOTIFICATION,
  payload: {event:eventId}
});
};
