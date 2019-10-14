import React, { Fragment, useState } from "react";
import QRCode from "qrcode.react";
import axios from "axios";

const QRCodeAPIs = () => {
  const [person, SetPerson] = useState([]);
  //   console.log(JSON.stringify(person));

  const fetchData = async e => {
    e.preventDefault();
    const result = await axios.get("https://randomuser.me/api/");
    SetPerson(result.data.results[0].name);
    console.log(result.data.results[0].name);
  };

  //const convertText = { ...person };

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
          <button className="btn btn-primary" onClick={fetchData}>
            Genrate Random QR
          </button>
        </form>
        <br /> <br />
        <div id="qrcode">
          <QRCode
            id="qrcodegen"
            value={JSON.stringify(person)}
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

export default QRCodeAPIs;
