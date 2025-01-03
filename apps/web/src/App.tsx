import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/routes";
import React from "react";

export const App = (): JSX.Element => {
  return (
    <main className="min-h-screen">
      <Header />
      <AppRoutes />
      <Footer />
    </main>
  );
};
