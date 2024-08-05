import { useEffect, ChangeEvent, useReducer } from "react";
import "./App.css";
import { AmountInfo } from "./components/AmountInfo/AmountInfo";
import { Header } from "./components/Header/Header";
import { TipCalculator } from "./components/TipCalculator/TipCalculator";

interface State {
  billAmount: number;
  personCount: number;
  isBillInputTouched: boolean;
  isPersonInputTouched: boolean;
  isCustomInputTouched: boolean;
  isTipSelected: boolean;
  personInputErrorMessage: string;
  billInputErrorMessage: string;
  tipPercentage: number | "custom";
  tipAmount: number;
  totalAmount: number;
  customTip: number;
  isResetSelected: boolean;
}

const initialState: State = {
  billAmount: 0,
  personCount: 0,
  isBillInputTouched: false,
  isPersonInputTouched: false,
  isCustomInputTouched: false,
  isTipSelected: false,
  personInputErrorMessage: "",
  billInputErrorMessage: "",
  tipPercentage: 0,
  customTip: 0,
  tipAmount: 0,
  totalAmount: 0,
  isResetSelected: false,
};

type Action =
  | { type: "SET_BILL_AMOUNT"; payload: number }
  | { type: "SET_PERSON_COUNT"; payload: number }
  | { type: "SET_CUSTOM_TIP"; payload: number }
  | { type: "SET_TIP_PERCENTAGE"; payload: number | "custom" }
  | { type: "SET_BILL_INPUT_TOUCHED"; payload: boolean }
  | { type: "SET_PERSON_INPUT_TOUCHED"; payload: boolean }
  | { type: "SET_CUSTOM_INPUT_TOUCHED"; payload: boolean }
  | { type: "SET_TIP_BUTTON_TOUCHED"; payload: boolean }
  | { type: "SET_RESET_SELECTED"; payload: boolean }
  | { type: "SET_PERSON_INPUT_ERROR"; payload: string }
  | { type: "SET_BILL_INPUT_ERROR"; payload: string }
  | { type: "CALCULATE_TIP" }
  | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_BILL_AMOUNT":
      return { ...state, billAmount: action.payload };
    case "SET_PERSON_COUNT":
      return { ...state, personCount: action.payload };
    case "SET_TIP_PERCENTAGE":
      return { ...state, tipPercentage: action.payload };
    case "SET_CUSTOM_TIP":
      return { ...state, customTip: action.payload };
    case "SET_BILL_INPUT_TOUCHED":
      return { ...state, isBillInputTouched: action.payload };
    case "SET_PERSON_INPUT_TOUCHED":
      return { ...state, isPersonInputTouched: action.payload };
    case "SET_TIP_BUTTON_TOUCHED":
      return { ...state, isTipSelected: action.payload };
    case "SET_CUSTOM_INPUT_TOUCHED":
      return { ...state, isCustomInputTouched: action.payload };
    case "SET_PERSON_INPUT_ERROR":
      return { ...state, personInputErrorMessage: action.payload };
    case "SET_BILL_INPUT_ERROR":
      return { ...state, billInputErrorMessage: action.payload };
    case "SET_RESET_SELECTED":
      return { ...state, isResetSelected: action.payload };
    case "CALCULATE_TIP":
      if (state.personCount > 0) {
        const tipAmount =
          (state.billAmount * ((state.tipPercentage as number) / 100)) /
          state.personCount;
        const totalAmount =
          (state.billAmount +
            state.billAmount * ((state.tipPercentage as number) / 100)) /
          state.personCount;
        return {
          ...state,
          tipAmount:
            isNaN(tipAmount) || !isFinite(tipAmount) || tipAmount < 0
              ? 0
              : tipAmount,
          totalAmount:
            isNaN(totalAmount) || !isFinite(totalAmount) || tipAmount < 0
              ? 0
              : totalAmount,
        };
      }
      return state;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const minPersonCount = 1;
  const minBillAmount = 1;
  const minCustomTip = 0;
  const tipPercentages: (number | "custom")[] = [5, 10, 15, 25, 50, "custom"];

  const isPersonInputValid = (value: number) => {
    if (value % 1 > 0) {
      dispatch({
        type: "SET_PERSON_INPUT_ERROR",
        payload: "No of people cannot be in decimal",
      });
      return false;
    }
    if (value < minPersonCount) {
      dispatch({
        type: "SET_PERSON_INPUT_ERROR",
        payload: `No of persons cannot be less than ${minPersonCount}`,
      });
      return false;
    }
    dispatch({ type: "SET_PERSON_INPUT_ERROR", payload: "" });
    return true;
  };

  const isBillInputValid = (value: number) => {
    if (value < minBillAmount) {
      dispatch({
        type: "SET_BILL_INPUT_ERROR",
        payload: `Bill amount cannot be less than ${minBillAmount}`,
      });
      return false;
    }
    dispatch({ type: "SET_BILL_INPUT_ERROR", payload: "" });
    return true;
  };

  useEffect(() => {
    if (state.isBillInputTouched) {
      isBillInputValid(state.billAmount);
    }
    if (state.isPersonInputTouched) {
      isPersonInputValid(state.personCount);
    }
    if (
      state.isBillInputTouched ||
      state.isPersonInputTouched ||
      state.isTipSelected ||
      state.isCustomInputTouched
    ) {
      dispatch({ type: "SET_RESET_SELECTED", payload: true });
    }

    dispatch({ type: "CALCULATE_TIP" });
  }, [
    state.billAmount,
    state.isPersonInputTouched,
    state.isBillInputTouched,
    state.personCount,
    state.tipPercentage,
    state.isTipSelected,
    state.isCustomInputTouched,
  ]);

  const personInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PERSON_COUNT", payload: Number(e.target.value) });
    dispatch({ type: "SET_PERSON_INPUT_TOUCHED", payload: true });
  };

  const billInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_BILL_AMOUNT", payload: Number(e.target.value) });
    dispatch({ type: "SET_BILL_INPUT_TOUCHED", payload: true });
  };

  const selectTipHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const percentage = Number(e.currentTarget.getAttribute("data-percentage"));
    dispatch({ type: "SET_TIP_PERCENTAGE", payload: percentage });
    dispatch({ type: "SET_TIP_BUTTON_TOUCHED", payload: true });
  };

  const customTipHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const customPercentage = Number(e.currentTarget.value);
    dispatch({ type: "SET_TIP_PERCENTAGE", payload: customPercentage });
    dispatch({ type: "SET_CUSTOM_TIP", payload: customPercentage });
    dispatch({ type: "SET_CUSTOM_INPUT_TOUCHED", payload: true });
  };

  const resetHandle = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <Header label="SPLITTER"></Header>
      <div className="splitter">
        <TipCalculator
          personInputHandle={personInputHandle}
          billInputHandle={billInputHandle}
          billInputErrorMessage={state.billInputErrorMessage}
          personInputErrorMessage={state.personInputErrorMessage}
          minBillAmount={minBillAmount}
          minPersonCount={minPersonCount}
          selectTipHandle={selectTipHandle}
          customTipHandle={customTipHandle}
          tipPercentages={tipPercentages}
          selectedTip={state.tipPercentage}
          minCustomTip={minCustomTip}
          personCount={state.personCount}
          billAmount={state.billAmount}
          customTip={state.customTip}
        ></TipCalculator>
        <AmountInfo
          tipAmount={state.tipAmount}
          totalAmount={state.totalAmount}
          resetHandle={resetHandle}
          isResetSelected={state.isResetSelected}
        ></AmountInfo>
      </div>
    </>
  );
}

export default App;
