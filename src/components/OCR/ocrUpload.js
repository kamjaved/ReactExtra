import React from "react";
import "./imagearea.css";
import speechSynthesis from "speech-synthesis";
import Tesseract from "tesseract.js";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "", ocr: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  Start = (setStart = true) => {
    if (setStart) {
      speechSynthesis(this.state.ocr, "en-IN");
      // console.log("Start");
    }
  };

  Stop = () => {
    window.speechSynthesis.cancel();
  };
  handleCLick = e => {
    e.preventDefault();
    Tesseract.recognize(this.state.file).then(result => {
      console.log(result.text);
      this.setState({ ocr: result.text });
    });
  };
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="" />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="previewComponent">
        <h3> ReactJS OCR Image Upload</h3>
        <form onSubmit={e => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={this.handleCLick}
          >
            Click To View Text
          </button>
        </form>{" "}
        <br />
        <div className="form-row col-sm-12 imagearea">
          <div className="col-sm-6 image">{$imagePreview}</div>

          <div className="col-sm-5 text">
            <h5> Image To Text Here 👇 </h5>
            <br />
            <p>{this.state.ocr}</p>
            <br />
            <br />
            <button className="btn btn-danger" onClick={this.Start}>
              <i className="fa fa-play"> </i>
            </button>
            <button className="btn btn-dark ml-2" onClick={this.Stop}>
              <i className="fa fa-stop"> </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
