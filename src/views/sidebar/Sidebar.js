import './sidebar.css'
import { AiOutlineHome, AiOutlineStock } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RiStore2Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import nextjs from "../../assets/nextjs.png";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarHomeList">
          <li className="sidebarHomeItem">
            <img src={nextjs} alt="" className="sidebarHomeLogo" />
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarItems">
            <AiOutlineHome className="sidebarLogo" />
            <FiShoppingCart className="sidebarLogo" />
            <RiStore2Line className="sidebarLogo" />
            <BsPeople className="sidebarLogo" />
            <AiOutlineStock className="sidebarLogo" />
          </li>
        </ul>
        <ul className="sidebarSetting">
          <li className="sidebarSettingItem">
            <MdOutlineSettings className="sidebarLogo" />
          </li>
        </ul>
      </div>
    </div>
  );
}
