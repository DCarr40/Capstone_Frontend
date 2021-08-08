export const createEvents = (event) => {
  return () => {
    //thunk lets me return a function that temp pause dispatch to do some other stuff first
    return (dispatch, getState) => {
      //asyn call to DB
      dispatch({ type: "CREATE_EVENT", event: event });
    };
  };
};
