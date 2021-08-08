export const createEvents = (event) => {
  return () => {
    //thunk lets me return a function that temp pause dispatch to do some other stuff first
    return (dispatch, getState) => {
      //asyn call to DB
      //I can save data or retrieve data from DB here
      dispatch({ type: "CREATE_EVENT", event: event });
    };
  };
};
