//초기 상태
const initialState = {
  todo: [
    {
      id: 1,
      title: "study react",
      body: "from 9am",
      isDone: false,
    },
    {
      id: 2,
      title: "go to gym",
      body: "after class",
      isDone: false,
    },
  ],
};

// action type
const ADD = "todo/ADD";
// const DELETE = 'todo/DELETE'
const TOGGLE = 'todo/TOGGLE'

//action creators
export const add_todo = (text) => {
  return {
    type: ADD,
    todo: {
      id: Date.now(),
      text: text,
    },
  };
};

export function toggleList(id) {
  return {
      type: TOGGLE,
      id,
  };
}
//* create Reducer */
export default function reducer(state = initialState, action){
  switch (action.type) {
    case ADD:
      return state.concat(action.todo);
    case TOGGLE:
      return;
    default:
      return state;
  }
}
