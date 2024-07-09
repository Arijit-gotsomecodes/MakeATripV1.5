import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-700 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-amber-100 font-bold tracking-tight">
          <Link to="/">MyMakeTrip.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-amber-100 px-3 font-bold hover:bg-blue-600 rounded-md"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-amber-100 px-3 font-bold hover:bg-blue-600 rounded-md"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-amber-100 items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded-md"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;