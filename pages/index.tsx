import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const route = useRouter();
  return (
    <div className="flex w-screen h-screen bg-gray-700 text-white justify-center items-center">
      <Head>
        <title>Welcome to Contnet pro 📈</title>
      </Head>
      <div className="flex flex-col border bg-[#333] py-[3rem] px-[2rem] border-black p-4 shadow-md rounded-md">
        <span className="text-center text-6xl mb-4">🌟</span>
        <h1 className="text-3xl font-bold my-2">Welcome to Content Pro 📈</h1>
        <p className="text-blue-500 font-semibold text-lg">
          {" "}
          Content Driven to productivity🚀
        </p>
        <p className="my-4 font-semibold">
          One place to maintain all your content and analytics⚡
        </p>
        <button
          className="bg-blue-600 text-white rounded-md p-2 "
          onClick={() => route.push("/main")}
        >
          Let's jump in.
        </button>
      </div>
    </div>
  );
};

export default Home;
