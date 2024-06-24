import style from "./Footer.module.css";
const footer = () => {
  return (
    <>
      <div className={` container-fluid ${style.footercontainer}  `}>
        <div className="row">
          <div className={`col ${style.footerinfo}`}>
            <p>This is HotelAPP</p>
            <p>2024</p>
            <p>Rohit Kushwaha</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default footer;
