import { Dispatch, SetStateAction, useCallback } from "react";
import { useBoardContext } from "../BoardContextProvider";
import { BoardDeleteAction, BoardEditAction } from "../types/Board";

interface Props<EditingData> {
  id: number;
  boardEditAction: BoardEditAction;
  boardDeleteAction: BoardDeleteAction;
  editingData: { [id: number]: EditingData };
  setEditingData: Dispatch<SetStateAction<{ [id: number]: EditingData }>>;
}

export function BoardPageColumnCardActionsView<EditingData>({
  id,
  boardEditAction,
  boardDeleteAction,
  editingData,
  setEditingData,
}: Props<EditingData>) {
  const { dispatch } = useBoardContext();

  const handleEditTitle = useCallback(() => {
    dispatch(boardEditAction);
  }, [boardEditAction, dispatch]);

  const handleEditButtonClick = useCallback(
    (id: number) => {
      setEditingData((prevEditing: { [id: number]: EditingData }) => ({
        ...prevEditing,
        [id]: {
          ...prevEditing[id],
        },
      }));
    },
    [setEditingData]
  );
  const handleSaveButtonClick = useCallback(() => {
    handleEditTitle();
    setEditingData((prevEditing) => {
      const newEditingCards = { ...prevEditing };
      delete newEditingCards[id];
      return newEditingCards;
    });
  }, [handleEditTitle, id, setEditingData]);

  const handleDeleteCard = useCallback(() => {
    dispatch(boardDeleteAction);
  }, [boardDeleteAction, dispatch]);
  return (
    <>
      {editingData[id] !== undefined ? (
        <button
          onClick={() => handleSaveButtonClick()}
          title="Save name"
          className="action-button"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => handleEditButtonClick(id)}
          title="Edit name"
          className="action-button"
        >
          Edit
        </button>
      )}
      <button
        onClick={() => {
          handleDeleteCard();
        }}
        title="Delete"
        className="action-button"
      >
        Delete
      </button>
    </>
  );
}
