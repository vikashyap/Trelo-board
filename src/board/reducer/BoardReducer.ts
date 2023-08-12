import { BoardAction, BoardState } from "../types/Board";

const reducer = (state: BoardState, action: BoardAction): BoardState => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case "EDIT_COLUMN":
      return {
        ...state,
        columns: state.columns.map((column) =>
          column.id === action.payload.id ? action.payload : column
        ),
      };
    case "DELETE_COLUMN":
      return {
        ...state,
        columns: state.columns.filter((column) => column.id !== action.payload),
        cards: state.cards.filter((card) => card.columnId !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
