import React, { Fragment, useState } from "react";
import QRCode from "qrcode.react";

const QRCodeInput = () => {
  const [value, setValue] = useState({
    name: ""
  });
  const { name } = value;

  const onChangeHandler = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
    //console.log(value);
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qrcodegen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Fragment>
      <div className="container">
        <form>
          <div className="form-group col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              onChange={onChangeHandler}
              name="name"
              value={name}
              required
            />
          </div>
        </form>

        <div id="qrcode">
          <QRCode
            id="qrcodegen"
            value={name}
            size={150}
            level={"H"}
            includeMargin={true}
          />
        </div>
        <button className="btn btn-danger" onClick={downloadQR}>
          Download QR
        </button>
      </div>
    </Fragment>
  );
};

export default QRCodeInput;
