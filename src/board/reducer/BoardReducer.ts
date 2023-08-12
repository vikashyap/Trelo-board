import { BoardAction, BoardState } from "../types/Board";

const reducer = (state: BoardState, action: BoardAction): BoardState => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
