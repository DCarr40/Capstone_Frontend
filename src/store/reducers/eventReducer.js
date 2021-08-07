const initState = {
  events: [
    { id: "1", title: "find peach", content: "blahahah" },
    { id: "2", title: "destroy peach", content: "muwhahah" },
    { id: "3", title: "lose peach", content: "hahahah" },
  ],
};

const eventReducer = (state = initState, action) => {
  return state;
};

export default eventReducer;
