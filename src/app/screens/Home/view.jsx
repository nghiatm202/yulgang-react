import { AiOutlinePlus } from "react-icons/ai"
import {
  BsBookmarks,
  BsCoin,
  BsExclamationSquare,
  BsReceiptCutoff,
} from "react-icons/bs"
import { HiOutlineUser } from "react-icons/hi"
import { TfiComments, TfiCrown } from "react-icons/tfi"
import Slider from "react-slick"
import { Footer } from "../../../common/components"
import Header from "../../../common/components/Header"
import banner1 from "../../assets/banner1.png"
import banner2 from "../../assets/banner2.png"
import banner3 from "../../assets/banner3.png"
import dwnBtn from "../../assets/dwn_btn.jpeg"
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slider2.png"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const Home = () => {
  return (
    <div className="wrapper">
      <div className="wrapperInner">
        <Header />

        <div className="contentMain">
          <div className="contentFirst">
            <div className="start">
              <div className="downloadBtn">
                <a href="#">
                  <img src={dwnBtn} alt="Download" />
                </a>
              </div>
              <div className="authentication">
                <div className="authenticationIcon">
                  <HiOutlineUser size={28} color="#fff" />
                  <a href="#">注册</a>
                </div>
                <div className="line"></div>
                <div className="authenticationIcon">
                  <BsCoin size={28} color="#fff" />
                  <a href="#">充值</a>
                </div>
              </div>
            </div>

            <div className="bannerBox">
              <Slider {...settings} className="bannerSlideWrapper">
                <div className="bannerSlide">
                  <img src={slide1} alt="Slider" />
                </div>
                <div className="bannerSlide">
                  <img src={slide2} alt="Slider" />
                </div>
                <div className="bannerSlide">
                  <img src={slide1} alt="Slider" />
                </div>
              </Slider>
            </div>

            <div className="newsBox">
              <h3 className="title">Thông báo</h3>
              <div className="newsTabs">
                <a href="#tab1" className="tab active">
                  Tất cả
                </a>
                <a href="#tab2" className="tab">
                  Bảo trì
                </a>
                <a href="#tab3" className="tab">
                  Sự kiện
                </a>
              </div>
              <div className="newsTabContent">
                <div id="tab1" className="tabBox">
                  <ul className="newsList">
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                    <li className="newsItem">
                      <a href="#" className="newsLink">
                        <span className="newsLabel">Tin tức</span>
                        <span className="newsTitle">
                          [ĐKT, TMC] Bảo trì 13/04/2023
                        </span>
                      </a>
                      <span className="newsDate">14/04/2023 16:45</span>
                    </li>
                  </ul>

                  <a href="#" className="newsViewMore viewMoreIcon">
                    <AiOutlinePlus className="viewMoreIconI" />
                  </a>
                </div>

                <div id="tab2" className="tabBox"></div>
                <div id="tab3" className="tabBox"></div>
              </div>
            </div>
          </div>

          <div className="contentSecond">
            <div className="sideBgImage">
              <div className="firstSideBg sideBg">
                <a href="#">完美江湖</a>
              </div>
              <div className="secondSideBg sideBg">
                <a href="#">完美江湖</a>
              </div>
              <div className="thirdSideBg sideBg">
                <a href="#">完美江湖</a>
              </div>
              <div className="fourthSideBg sideBg">
                <a href="#">外挂与游戏问题</a>
              </div>
            </div>

            <div className="rankingBox">
              <div className="rankingTabs">
                <div className="dropdown">
                  <button
                    className="dropdownToggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-value="option1"
                  >
                    Option 1<i className="fas fa-caret-down dropdownArrow"></i>
                  </button>
                  <div
                    className="dropdownMenu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdownItem" href="#" data-value="option1">
                      Option 1
                    </a>
                    <a className="dropdownItem" href="#" data-value="option2">
                      Option 2
                    </a>
                    <a className="dropdownItem" href="#" data-value="option3">
                      Option 3
                    </a>
                  </div>
                </div>

                <a href="#tab4" className="tab active">
                  Top level
                </a>
                <a href="#tab5" className="tab">
                  Top tài phú
                </a>
              </div>
              <div className="rankingTabContent">
                <div id="tab4" className="tabBox">
                  <div className="tableRankingWrapper">
                    <table className="tableRanking">
                      <thead>
                        <tr>
                          <th>Nhân vật</th>
                          <th>Cấp</th>
                          <th>Lớp</th>
                          <th>Phái</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                        <tr className="evil">
                          <td>zHanBaoQuanBNz</td>
                          <td>152</td>
                          <td>Đao Khách</td>
                          <td>Tà</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <a href="#" className="rankingViewMore viewMoreIcon">
                    <AiOutlinePlus className="viewMoreIconI" />
                  </a>
                </div>

                <div id="tab5" className="tabBox"></div>
              </div>
            </div>
          </div>

          <div className="contentThird">
            <div className="troubleshooting">
              <div className="troubleshootingBox">
                <BsBookmarks size={24} />
                <span>Bookmark</span>
              </div>
              <div className="troubleshootingBox">
                <BsReceiptCutoff size={24} />
                <span>Receipt</span>
              </div>
              <div className="troubleshootingBox">
                <HiOutlineUser size={24} />
                <span>User</span>
              </div>
              <div className="troubleshootingBox">
                <BsExclamationSquare size={24} />
                <span>Exclamation</span>
              </div>
              <div className="troubleshootingBox">
                <TfiCrown size={24} />
                <span>Crow</span>
              </div>
              <div className="troubleshootingBox">
                <TfiComments size={24} />
                <span>Comments</span>
              </div>
            </div>

            <div className="bigBanner">
              <img src={banner1} alt="Banner" />
            </div>

            <div className="smallBanner">
              <div className="first">
                <img src={banner2} alt="Banner" />
              </div>
              <div className="second">
                <img src={banner3} alt="Banner" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Home
