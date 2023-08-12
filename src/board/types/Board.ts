export interface Card {
  id: number;
  title: string;
  columnId: number;
  description?: string;
}

export interface Column {
  id: number;
  title: string;
}

export interface BoardState {
  columns: Column[];
  cards: Card[];
}

export interface BoardContextType {
  state: BoardState;
  dispatch: React.Dispatch<any>;
}

export type BoardAction =
  | { type: "ADD_COLUMN"; payload: Column }
  | { type: "EDIT_COLUMN"; payload: Column }
  | { type: "DELETE_COLUMN"; payload: number };

export type ExcludedActionTypes = Exclude<BoardAction["type"], "ADD_COLUMN">;

export type ExcludedDeleteActions = Exclude<
  ExcludedActionTypes,
  "DELETE_COLUMN"
>;

export type ExcludedEditAction = Exclude<ExcludedActionTypes, "EDIT_COLUMN">;

export type BoardEditAction = Extract<
  BoardAction,
  { type: ExcludedDeleteActions }
>;
export type BoardDeleteAction = Extract<
  BoardAction,
  { type: ExcludedEditAction }
>;
