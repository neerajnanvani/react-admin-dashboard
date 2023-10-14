import { FaMagnifyingGlass } from "react-icons/fa6";

// header for home page
const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col">
        <h1 className="font-semibold md:text-xl text-lg">
        Hello Neeraj 👋,
        </h1>

        <div className="sm:ml-auto ml-0 mt-3 sm:mt-0 flex  bg-white rounded-md px-2 text-gray-400">
        <FaMagnifyingGlass className="self-center" />
        <input className="px-2 p-1 pl-2 focus:outline-none " placeholder="Search" />
        </div>
    </div>
  )
}

export default Header