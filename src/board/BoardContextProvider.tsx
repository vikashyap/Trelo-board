import {
  FC,
  ReactNode,
  Reducer,
  createContext,
  useEffect,
  useReducer,
} from "react";
import useSessionStorage from "./hooks/useSessionStorage";
import reducer from "./reducer/BoardReducer";
import { BoardAction, BoardContextType, BoardState } from "./types/Board";

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);

export const BoardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [storedState, setStoredState] = useSessionStorage<BoardState>(
    "boardAppState",
    {
      columns: [],
      cards: [],
    }
  );
  const [state, dispatch] = useReducer<Reducer<BoardState, BoardAction>>(
    reducer,
    storedState
  );

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};
