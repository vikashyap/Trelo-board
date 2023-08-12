import { FC } from "react";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import "./AppLayout.css";

interface AppLayoutProps extends React.PropsWithChildren<{}> {}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app">
      <AppHeader />
      <main className="main">{children}</main>
      <AppFooter />
    </div>
  );
};
