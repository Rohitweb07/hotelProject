import style from "./Siderbar.module.css";
import { FaBook, FaChair, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import { TbReport } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <>
      <div className={`container ${style.sidebarcontainer}`}>
        <div className="row">
          <div className="col">
            <table className={` ${style.sidebartable}`}>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <FaBook />
                  </td>

                  <td>Menu</td>
                </tr>
                <tr>
                  <td>
                    <FaChair />
                  </td>
                  <td>Tables</td>
                </tr>
                <tr>
                  <td>
                    <GiKnifeFork />
                  </td>
                  <td>Orders</td>
                </tr>

                <tr>
                  <td>
                    <FaBagShopping />
                  </td>
                  <td>Qts</td>
                </tr>

                <tr>
                  <td>
                    <TbReport />
                  </td>
                  <td>Reports</td>
                </tr>

                <tr>
                  <td>
                    <IoMdSettings />
                  </td>
                  <td>Settings</td>
                </tr>

                <tr>
                  <td>
                    <FaSignOutAlt />
                  </td>
                  <td>SignOut</td>
                </tr>

                <tr>
                  <td>
                    <FaUserPlus />
                  </td>
                  <td>CreateAccount</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
