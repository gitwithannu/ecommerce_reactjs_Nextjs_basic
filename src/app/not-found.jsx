import './notfound.css';

import NotFoundImg from "../../src/assets/images/page-404.png"
import { Button } from "@mui/material";

const notfound = () => {

  return (

    <section className="notFound">
      <div className="container-fluid">
        <div className="box">
          <img src={NotFoundImg.src} />
          <br/><br/>
          <h1>Page Not Found</h1>
          <p>The link you clicked may be broken or the page may have been removed.</p>
          <p>visit the Homepage or Contact us about the problem</p>
          <br/>
        </div>
        <div className="d-flex">
          <Button className="btn-g btn-lg m-auto">Back to Home Page</Button>
        </div>
      </div>
    </section>
  );
};


export default notfound
