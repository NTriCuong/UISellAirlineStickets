import { useNavigate } from "react-router-dom";
import "../../../Style/HomeStyle/HeaderStyle/style.css";

function ComponentHeader(){
    const navigate = useNavigate();
    return (<header>
        <div id="header">
                    {/* Nav */}
                    <ul id="nav">
                        <li>
                            <a href="#">Trang chủ</a>
                        </li>
                        <li>
                            <a href="#band">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#tour">Lịch trình</a>
                        </li>
                        <li>
                            <a href="#contact">Liên hệ</a>
                        </li>
                        <li>
                            <a href="#">
                                More
                            </a>
                            <ul className="subnav">
                                <li>
                                    <a href="https://www.yonex.com/">Yonexxxxxx</a>
                                </li>
                                <li>
                                    <a href="https://liningbadminton.vn/">Lininggggg</a>
                                </li>
                                <li>
                                    <a href="https://www.victorsport.com/index.html">Victorrrrr</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* Search */}
                    <div className="login-btn" onClick={() => navigate("/login")}>
                        <div className="login-icon">Đăng nhập</div>
                    </div>
                    <div id="mobile-menu" className="menu-mobile">
                        <i className=" menu-icon ti-menu" />
                    </div>
                </div>
                </header>
    );
}
export default ComponentHeader;