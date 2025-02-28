import "../../../Style/HomeStyle/InformationStyle/style.css";
import barcelonaCity from"../../../image/barcelonaCity.jpg";
import paisCitybanner from"../../../image/paisCitybanner.jpg";
import romeCity from"../../../image/romeCity.jpg";
function ComponentInformation(){
    const imageMiniBanner=[
        {
            src :paisCitybanner,
            name:"Paris City",
        },{
            src :barcelonaCity,
            name:"Barcelona City",
        },{
            src :romeCity,
            name:"Rome City",
        }
    ]
    return <div id="content">
                {/* About section */}
                <div id="band" className="content-section">
                    <h2>CTY TNHH Nhóm 3</h2>
                    <p className="section-sub-heading">Về chúng tôi</p>
                    <p className="about-text">
                    CTY TNHH Nhóm 3 là đơn vị chuyên cung cấp dịch vụ đặt vé máy bay nhanh chóng, tiện 
                    lợi tại Việt Nam. Chúng tôi tự hào mang đến hệ thống đặt vé trực tuyến hiện đại,
                     giúp khách hàng dễ dàng tìm kiếm, so sánh giá cả và lựa chọn hành trình phù hợp nhất.
                      Với nhiều năm kinh nghiệm, chúng tôi cam kết cung cấp vé từ các hãng hàng không uy tín 
                      như Vietnam Airlines, Vietjet Air, Bamboo Airways, cùng với nhiều hãng hàng không quốc tế khác. 
                      Khách hàng có thể đặt vé một cách nhanh chóng, tiết kiệm thời gian và chi phí. Ngoài ra, chúng t
                      ôi còn cung cấp dịch vụ hỗ trợ khách hàng tận tâm, giúp giải đáp mọi thắc mắc về hành trình bay.
                       Với phương châm "Chất lượng - Uy tín - Tiện lợi", chúng tôi luôn không ngừng nâng cao dịch vụ để 
                    mang lại trải nghiệm tốt nhất cho khách hàng.
                    </p>
                    <div className="box-mini-banner">
                        <ul>
                            {imageMiniBanner.map((item)=>{ 
                                return <li key={item.name}>
                                <p>{item.name}</p>
                                <img className="img-mini-banner"
                                    src={item.src}
                                    alt="Name"
                                />
                            </li>
                            })}
                        </ul>
                    </div>
                </div> 
            </div>
};
export default ComponentInformation;