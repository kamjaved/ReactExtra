import React, { Fragment, useState } from "react";
import speechSynthesis from "speech-synthesis";
import Tesseract from "tesseract.js";
import "./imagearea.css";

const OcrTesseract = () => {
  const [ocr, Setocr] = useState([]);
  const [imgURL, SetimgURL] = useState({
    url: ""
  });
  //const [start, setStart] = useState(false);

  const onChangeHandler = e => {
    SetimgURL({ ...imgURL, [e.target.name]: e.target.value });
    console.log(imgURL);
  };

  const handleCLick = e => {
    e.preventDefault();

    Tesseract.recognize(imgURL.url).then(result => {
      console.log(result.text);
      Setocr(result.text);
    });
  };

  const Start = (setStart = true) => {
    if (setStart) {
      speechSynthesis(ocr, "en-IN");
      // console.log("Start");
    }
  };

  const Stop = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <Fragment>
      <div className="container">
        <form>
          <h3>React OCR</h3> <br />
          <div className="form-row">
            <div className=" col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image URL"
                onChange={onChangeHandler}
                value={imgURL.url}
                name="url"
                required
              />
            </div>

            <button className="btn btn-primary" onClick={handleCLick}>
              Click
            </button>
          </div>
        </form>
        <br />
        <div className="form-row col-sm-12 imagearea">
          <div className="col-sm-6 image">
            <img src={imgURL.url} alt="" />
          </div>

          <div className="col-sm-5 text">
            <h4> Image To Text Here 👇 </h4>
            <br />
            <p>{ocr}</p> <br />
            <br />
            <button className="btn btn-danger" onClick={Start}>
              <i className="fa fa-play"> </i>
            </button>
            <button className="btn btn-dark ml-2" onClick={Stop}>
              <i className="fa fa-stop"> </i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OcrTesseract;

/// --IMG__URL__LINK
// https://i2.wp.com/41.media.tumblr.com/d3aacd7fb9728ec384ebeeae6dd686b5/tumblr_ni2v7bN8zW1tjj1jfo1_500.jpg

// https://upload.wikimedia.org/wikipedia/commons/7/75/Southern_Life_in_Southern_Literature_text_page_322.jpg

//https://www.w3.org/TR/SVGTiny12/examples/textArea01.png

//https://www.news.gatech.edu/sites/default/files/uploads/mercury_images/asthma_text_2_copy_0.jpg

// ----ISSUE CORS----
// https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-get-a-no-access-control-allow-origin-header-is-pr#20035319

//
