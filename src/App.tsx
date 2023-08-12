import { FC } from "react";
import { BoardProvider } from "./board/BoardContextProvider";

const App: FC = () => {
  return (
    <BoardProvider>
      <main>coming soon</main>
    </BoardProvider>
  );
};

export default App;
