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

export type BoardAction = { type: "ADD_COLUMN"; payload: Column };
