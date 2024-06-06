import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useCallback, useContext, useState } from "react";
import { User } from "../../../assets";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
import { useTheme } from "../../../helpers/dark-mode";

const Navbar = ({ menuActive, handleMenuActive }) => {
  const [search, setSearch] = useState(false);
  const userAccount = true;

  const { toggleDarkMode, darkMode, handleSearch, searchStr } = useTheme();

  const handleSearchInput = useCallback(() => {
    setSearch((prevSearch) => !prevSearch);
  }, [search]);

  return (
    <div
      className={
        darkMode
          ? "text-slate-600 flex items-center justify-between w-full h-[70px] border-b border-gray-200"
          : "flex items-center justify-between w-full h-[70px] border-b border-gray-800 text-white"
      }
    >
      <div className="flex items-center justify-start gap-4 w-[450px] h-full px-4">
        <div className="text-2xl cursor-pointer" onClick={handleMenuActive}>
          {menuActive ? <RiMenuUnfoldFill /> : <RiMenuFoldFill />}
        </div>
        <div className="flex items-center gap-2 w-4/5">
          <div className="text-2xl cursor-pointer hover:bg-gray-800 p-2 rounded-full" onClick={handleSearchInput}>
            <IoIosSearch />
          </div>
          <input
            type="text"
            placeholder="search..."
            value={searchStr}
            onChange={handleSearch}
            className={
              search
                ? "border-[1px] rounded-full border-gray-700 bg-transparent outline-none text-[14] w-full h-[40px] px-4 py-2 text-gray-500"
                : "hidden"
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 w-[130px] h-full px-2">
        <div className="text-xl" onClick={toggleDarkMode}>
          {darkMode ? <IoSunnyOutline /> : <BsMoonStars />}
        </div>
        <div className="text-xl">
          <LuBellRing />
        </div>
        <div className="rounded-full w-10 h-10 bg-sky-400 flex items-center justify-center">
          {userAccount ? (
            <img
              src={User}
              alt=""
              className="rounded-full object-cover w-full h-full"
            />
          ) : (
            <h2 className="font-semibold text-xl">UN</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
