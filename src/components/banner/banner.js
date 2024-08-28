
import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-2.png";
import Banner3 from "../../assets/images/banner-3.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="bannerSection">
        <div className="container-fluid">
          <div className="row">
          <div className="col">
              <div className="box">
                <img src={Banner1.src} className="w-100 transition"  alt="Banner 1" />
              </div>
            </div>
            <div className="col">
              <div className="box">
                <img src={Banner2.src} className="w-100 transition"  alt="Banner 2" />
              </div>
            </div>
            <div className="col">
              <div className="box">
                <img src={Banner3.src} className="w-100 transition"  alt="Banner 3" />
              </div>
            </div>
            
          </div>            
        </div>      
    </div>
  )
};

export default Banner
