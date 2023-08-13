import { FC, useCallback } from "react";
import { useBoardContext } from "../hooks/useBoardContext";
import { Card } from "../types/Board";

interface Props {
  columnId: number;
}

export const BoardPageColumnAddCardView: FC<Props> = ({ columnId }) => {
  const { dispatch } = useBoardContext();

  const handleAddCardInColumnClick = useCallback(
    (columnId: number) => {
      const newCard: Card = {
        id: Date.now(),
        title: "Untitled card",
        columnId,
      };
      dispatch({ type: "ADD_CARD", payload: newCard });
    },
    [dispatch]
  );
  return (
    <div
      className="add-card-button"
      onClick={() => handleAddCardInColumnClick(columnId)}
    >
      + Add Card
    </div>
  );
};
