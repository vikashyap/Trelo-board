import {
  FC,
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";
import reducer from "./reducer/BoardReducer";
import { BoardAction, BoardContextType, BoardState } from "./types/Board";

const initialState: BoardState = {
  columns: [],
  cards: [],
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<BoardState, BoardAction>>(
    reducer,
    initialState
  );

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
