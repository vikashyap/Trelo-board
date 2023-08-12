import { FC } from "react";
import { BoardProvider } from "./board/BoardContextProvider";
import { BoardLayout } from "./board/views/BoardLayout";
import { AppLayout } from "./components/AppLayout/AppLayout";

const App: FC = () => {
  return (
    <BoardProvider>
      <AppLayout>
        <BoardLayout />
      </AppLayout>
    </BoardProvider>
  );
};

export default App;
