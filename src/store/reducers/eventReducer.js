const initState = {
  events: [
    { id: "1", title: "find peach", content: "blahahah" },
    { id: "2", title: "destroy peach", content: "muwhahah" },
    { id: "3", title: "lose peach", content: "hahahah" },
  ],
};

//Reducer for all events for my app
const eventReducer = (state = initState, action) => {
  return state;
};

export default eventReducer;
