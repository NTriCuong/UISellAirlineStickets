import bannerFlight from"../../../image/bannerFlight.jpg";
import "../../../Style/HomeStyle/BannerStyle/style.css";

function ComponentBanner(){
    return <div className="slider">
        <img src={bannerFlight} alt="Ảnh máy bay" />
    </div>
}
export default ComponentBanner;