import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "./../ui/Footer";

export default function RootLayout() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
