// tipCalculatorReducer.ts
import { TipCalculatorAction } from "./tipCalculatorActions";

export interface TipCalculatorState {
  billAmount: number | string;
  personCount: number | string;
  tipPercentage: number;
}

export const initialState: TipCalculatorState = {
  billAmount: "",
  personCount: 1,
  tipPercentage: 5,
};

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
      return { ...state, tipPercentage: +action.payload };
    default:
      return state;
  }
}
