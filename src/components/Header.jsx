import { useState } from "react";
import style from "./Header.module.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Header = ({ toggeleSidebar }) => {
  const [isiomenu, setiomenu] = useState(false);
  const handletoggler = () => {
    setiomenu(!isiomenu);
    toggeleSidebar();
  };
  return (
    <>
      <div className={` container-fluid ${style.headercontainer}  `}>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <div className={`col ${style.menuicon}`} onClick={handletoggler}>
                {isiomenu ? <RxCross2 /> : <IoMenu />}
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="col-7"></div>
          <div className="col-3">
            <div className="row">
              <div className="col"></div>
              <div className="col">ProfileName</div>
              <div className="col">Profilepic</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
