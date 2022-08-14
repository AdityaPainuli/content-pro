import { type NextPage } from "next";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Choices from "../components/Choices";
import Overview from "../components/Overview";

const main: NextPage = () => {
  return (
    <div className=" bg-gray-700 h-screen w-screen">
      <Head>
        <title>Content Pro / Home</title>
      </Head>
      <Navbar />
      {/* Choices for different Platform */}
      <main className="w-[90%] my-4 mx-auto p-2">
        <Choices />
        {/* Main Screen - All data analytics will be shown there regarding to the application. */}
        <Overview />
      </main>
    </div>
  );
};

export default main;
