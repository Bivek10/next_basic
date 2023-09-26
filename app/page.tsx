"use client";
import React from "react";
import HomePage from "./pages/home/page";
import Footer from "./components/organisms/footer";
import NavBar from "./components/organisms/navbar";

function main() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
}

export default main;
