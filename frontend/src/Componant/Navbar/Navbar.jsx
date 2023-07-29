import "./Navbar.css";
import img1 from "../../Images/img1.svg";
import { ImLocation } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Login from "../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Location from "../Location/Location";
import SearchBox from "./SearchBox/SearchBox";

const Navbar = () => {
  const { logoutAuth, token, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate("/", { replace: true });
  };
  const handelLogout = () => {
    logoutAuth();
    navigate("/", { replace: true });
  };
  return (
    <div id="Navmain">
      <div id="navlogo1111" onClick={handelNavigate}>
        <img src={img1}></img>
      </div>

      <div id="div2">
        <Location />
      </div>

      <div id="div3">
        <SearchBox />
      </div>

      <div id="div4">
        <Cart />
      </div>

      <Button id="div5" disabled={token == "" ? true : false} size="md">
        <div>
          <BiWallet />
        </div>
        <div>Credit</div>
      </Button>

      <div id="div6">
        {token == "" ? (
          <Login />
        ) : (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {user}
                </MenuButton>
                <MenuList>
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem>Invite a Freind</MenuItem>
                  <MenuItem>Help & Support</MenuItem>
                  <MenuItem onClick={handelLogout}>Logout</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        )}
      </div>
    </div>
  );
};

export default Navbar;
