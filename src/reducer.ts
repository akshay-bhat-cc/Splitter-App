type State = { count: number; step: number };
type CountAction = { type: "INC"; payload?: number };
function counterStore(intialVal: State) {
  let state = intialVal;
  return {
    getState(): State {
      return state;
    },

    dispatch(action: CountAction) {
      switch (action.type) {
        case "INC": {
          state = { ...state, count: state.count + 1 };
        }
      }
    },
  };
}

const countStore = counterStore({ count: 1, step: 5 });
countStore.dispatch({ type: "INC", payload: 100 });
console.log(countStore.getState());
