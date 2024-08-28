
import NewsLetterImg from "../../assets/images/banner-9.png";
import NewsLetter from "../newsletter/newsletter";

const Footer = () => {
  return (
    <>
     <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>Stay home & get your daily <br></br> needs from our shop </h2>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <NewsLetter/>

            </div>
            <div className="img">
              <img src={NewsLetterImg.src} className="w-100" />
            </div>
          </div>

        </div>
     </section>   
    </>
  )
};

export default Footer
