import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between px-[3rem] bg-gray-800  text-white py-[1rem] items-center">
      <div className="">
        <h1 className="text-3xl font-bold cursor-pointer">Content Pro⚡</h1>
      </div>
      <ul className="flex space-x-[2rem] ">
        <li className="">
          <a
            href="https://twitter.com/aditya_painuli"
            className="font-semibold text-lg "
          >
            About the Creator
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="font-semibold text-lg"
            onClick={() => router.push("/")}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
