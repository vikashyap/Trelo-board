import { FC, useState } from "react";
import { useBoardContext } from "../hooks/useBoardContext";
import { Column } from "../types/Board";

export const BoardPageAddColumnView: FC = () => {
  const { dispatch } = useBoardContext();
  const [newColumnName, setNewColumnName] = useState("");

  const handleAddColumn = () => {
    if (newColumnName.trim() !== "") {
      const newColumn: Column = {
        id: Date.now(),
        title: newColumnName,
      };
      dispatch({ type: "ADD_COLUMN", payload: newColumn });
      setNewColumnName("");
    }
  };

  return (
    <div className="add-column">
      <input
        type="text"
        placeholder="Enter column name"
        value={newColumnName}
        onChange={(e) => setNewColumnName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddColumn();
          }
        }}
      />
      <button onClick={handleAddColumn}>Add Column</button>
    </div>
  );
};
