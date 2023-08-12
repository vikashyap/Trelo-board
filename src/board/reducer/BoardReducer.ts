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
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case "EDIT_CARD":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        ),
      };
    case "DELETE_CARD":
      const deletedCardId = action.payload;
      const updatedCards = state.cards.filter(
        (card) => card.id !== deletedCardId
      );
      return {
        ...state,
        cards: updatedCards,
      };
    default:
      return state;
  }
};

export default reducer;
