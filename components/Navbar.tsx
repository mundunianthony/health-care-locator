import { NavLink } from "react-router-dom";
import { MdHomeWork, MdPermContactCalendar, MdAddHome } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import AddPropertyModal from "./AddPropertyModal";
import { useState } from "react";
import useAuthCheck from "../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

const Navbar = ({ containerStyles }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user, isAuthenticated } = useAuth0();

  const isAdmin = isAuthenticated && user?.email === ADMIN_EMAIL;

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-2 rounded-lg px-4 py-2 bg-indigo-50 text-indigo-700 font-medium"
            : "flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        }
      >
        <MdHomeWork className="text-xl text-indigo-600" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to={"/listing"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-2 rounded-lg px-4 py-2 bg-teal-50 text-teal-700 font-medium"
            : "flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
        }
      >
        <RiCheckboxMultipleBlankFill className="text-xl text-teal-600" />
        <span>Listing</span>
      </NavLink>

      <NavLink
        to={"mailto:inquiries.mactimothy07@gmail.com"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-2 rounded-lg px-4 py-2 bg-amber-50 text-amber-700 font-medium"
            : "flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
        }
      >
        <MdPermContactCalendar className="text-xl text-amber-600" />
        <span>Contact</span>
      </NavLink>

      {isAdmin && (
        <button
          onClick={handleAddPropertyClick}
          className="flex items-center gap-2 rounded-lg px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200 shadow-sm"
        >
          <MdAddHome className="text-xl" />
          <span>Add Property</span>
        </button>
      )}

      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
    </nav>
  );
};

export default Navbar;