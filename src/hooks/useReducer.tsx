export function useReducer<StateT, ActionT>(
  reducer: (state: StateT, action: ActionT) => StateT,
  initialState: StateT
): [StateT, (action: ActionT) => void] {
  let state = initialState;

  const dispatch = (action: ActionT) => {
    state = reducer(state, action);
  };

  return [state, dispatch];
}
