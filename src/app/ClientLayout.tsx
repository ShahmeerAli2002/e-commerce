"use client"; 

import { Provider } from "react-redux";
import { store } from "./redux/store";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import Card from "./components/Card";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;

})


{
    const [ showCart, setShowCart] = useState (false)
  return (
    <Provider store={store}>
      <NavBar setShowCart = {setShowCart} />
      {showCart && <Card setShowCart = {setShowCart} />}
      {children}
      <Footer />
    </Provider>
  );
}
