import React from "react";
import "../content/Content.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlane } from "@fortawesome/free-solid-svg-icons";
import iconFlight from "../../image/iconFlight.png";


function Content() {
  return (
    <div className="content-container">
      <div className="content-box">
        <div className="content-header">
          <p>Danh sach cac chuyen bay</p>
          <div className="icon-plane">
            {/* <FontAwesomeIcon icon={faPlane} /> */}
            <img src={iconFlight} alt="icon-flight" className="custom-icon-flight" />
          </div>
        </div>
        <div className="content-button">
          <div className="content-flight-start">
            <input type="text" placeholder="Diem xuat phat"></input>
          </div>
          <div className="content-flight-end">
            <input type="text" placeholder="Diem ket thuc"></input>
          </div>
          <div className="content-flight-button">
            <input type="submit" value={"Tim chuyen bay"}></input>
          </div>
        </div>
        <div className="content-info">
          <div className="content-info-details">
            <div className="details-start">qwe</div>
            <div className="details-end">qwe</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
