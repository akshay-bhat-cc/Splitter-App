import { useMemo, useReducer } from "react";
import "./App.css";
import { AmountInfo } from "./components/AmountInfo/AmountInfo";
import { Header } from "./components/Header/Header";
import { TipInputForm } from "./components/TipInputForm/TipInputForm";

export interface TipCalculatorState {
  billAmount: string;
  personCount: string;
  tipPercentage: string;
}

export const initialState: TipCalculatorState = {
  billAmount: "",
  personCount: "",
  tipPercentage: "",
};

export type TipCalculatorAction =
  | { type: "SET_BILL_AMOUNT"; payload: string }
  | { type: "SET_PERSON_COUNT"; payload: string }
  | { type: "SET_TIP_PERCENTAGE"; payload: string };

export function tipCalculatorReducer(
  state: TipCalculatorState,
  action: TipCalculatorAction
): TipCalculatorState {
  switch (action.type) {
    case "SET_BILL_AMOUNT":
      return { ...state, billAmount: action.payload };
    case "SET_PERSON_COUNT":
      return { ...state, personCount: action.payload };
    case "SET_TIP_PERCENTAGE":
      return { ...state, tipPercentage: action.payload };
  }
}

export function App() {
  const [state, dispatch] = useReducer(tipCalculatorReducer, initialState);

  const resetHandle = () => {
    dispatch({ type: "SET_BILL_AMOUNT", payload: initialState.billAmount });
    dispatch({ type: "SET_PERSON_COUNT", payload: initialState.personCount });
    dispatch({
      type: "SET_TIP_PERCENTAGE",
      payload: initialState.tipPercentage,
    });
  };

  const tipAmount = useMemo(() => {
    if (+state.personCount > 0 && +state.tipPercentage > 0) {
      return (+state.billAmount * +state.tipPercentage) / 100;
    }
    return 0;
  }, [state.billAmount, state.tipPercentage, state.personCount]);

  const totalAmount = useMemo(() => {
    if (+state.personCount > 0 && +state.tipPercentage > 0) {
      return (+state.billAmount + tipAmount) / +state.personCount;
    }
    return 0;
  }, [state.personCount, state.tipPercentage, state.billAmount, tipAmount]);

  return (
    <div className="splitter_wrapper">
      <Header label="SPLITTER" />
      <div className="splitter">
        <TipInputForm state={state} dispatch={dispatch} />
        <AmountInfo
          tipAmount={tipAmount / +state.personCount}
          totalAmount={totalAmount}
          resetHandle={resetHandle}
          isResetSelected={
            state.billAmount !== initialState.billAmount ||
            state.personCount !== initialState.personCount ||
            state.tipPercentage !== initialState.tipPercentage
          }
        />
      </div>
    </div>
  );
}

export default App;
