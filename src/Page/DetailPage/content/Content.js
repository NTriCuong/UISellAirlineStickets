import React from "react";
import "../../../Style/DetailStyle/Content.css";
import iconFlight from "../../../image/iconFlight.png";
import '../../../App.css'

function Content() {
  return (
    <div className="content-container">
      <div className="content-box">
        <div className="content-header">
          <p>Danh sách các chuyến bay</p>
          <div className="icon-plane">
            {/* <FontAwesomeIcon icon={faPlane} /> */}
            <img src={iconFlight} alt="icon-flight" className="custom-icon-flight" />
          </div>
        </div>
        <div className="content-button">
          <div className="content-flight-start">
            <input type="text" placeholder="Điểm xuất phát"></input>
          </div>
          <div className="content-flight-end">
            <input type="text" placeholder="Điểm kết thúc"></input>
          </div>
          <div className="content-flight-button">
            <input type="submit" value={"Tìm chuyến bay"}></input>
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
