import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";
import PropTypes from "prop-types";
const navItems = [
  { name: "Home", icon: AiOutlineHome, path: "/" },
  { name: "Shop", icon: AiOutlineShopping, path: "/shop" },
  { name: "Cart", icon: AiOutlineShoppingCart, path: "/cart" },
  { name: "Favorites", icon: FaHeart, path: "/favorite", custom: <FavoritesCount /> },
];

export default function Navigation({collapsed, toggleSidebar }) {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const [logoutApi] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <aside
      className={
        `fixed top-0 left-0 h-full bg-gray-900 text-white flex flex-col justify-between transition-width duration-300 ` +
        (collapsed ? "w-16" : "w-56")
      }
    >
      <div className="flex flex-col flex-1">
        <button
          onClick={toggleSidebar}
          className="p-4 focus:outline-none hover:bg-gray-800"
        >
          {collapsed ? <AiOutlineMenuUnfold size={24} /> : <AiOutlineMenuFold size={24} />}
        </button>
        <nav className="mt-6 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const count =
              item.name === "Cart"
                ? cartItems.reduce((sum, i) => sum + i.qty, 0)
                : item.name === "Favorites"
                ? null
                : 0;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors mb-1"
              >
                <Icon size={20} />
                {!collapsed && <span className="flex-1">{item.name}</span>}
                {item.name === "Cart" && count > 0 && (
                  <span className="bg-red-500 text-xs px-2 rounded-full">
                    {count}
                  </span>
                )}
                {item.name === "Favorites" && !collapsed && <FavoritesCount />}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mb-6 px-4 relative">
        {userInfo ? (
          <>
            <button
              onClick={toggleDropdown}
              className="w-full flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded"
            >
              <span className="flex items-center gap-2">
                <AiOutlineShoppingCart />
                {!collapsed && <span>{userInfo.username}</span>}
              </span>
              {!collapsed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
            {dropdownOpen && !collapsed && (
              <ul className="mt-2 bg-gray-800 rounded overflow-hidden">
                {userInfo.isAdmin && (
                  <>
                    <li>
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/productlist"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/categorylist"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/orderlist"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/userlist"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Users
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <Link
              to="/login"
              className="flex items-center gap-2 hover:bg-gray-800 px-2 py-2 rounded"
            >
              <AiOutlineLogin size={20} />
              {!collapsed && <span>Login</span>}
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 hover:bg-gray-800 px-2 py-2 rounded"
            >
              <AiOutlineUserAdd size={20} />
              {!collapsed && <span>Register</span>}
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
Navigation.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};