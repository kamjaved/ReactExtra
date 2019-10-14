import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import OcrTesseract from "./components/OCR/ocrTesseract";
import OcrUpload from "./components/OCR/ocrUpload";
import Sidebar from "./components/UI/sidebar";
import TableXLS from "./components/CSV_EXCEL/tableXLS";
import TableCsv from "./components/CSV_EXCEL/tableCSV";
import QRCodeAPIs from "./components/QRCODE/qrcodeAPIs";
import QRCodeInput from "./components/QRCODE/qrcodeInput";

function App() {
  return (
    <Router>
      <Fragment>
        <Sidebar>
          <Switch>
            <Route exact path="/qrcode/api" component={QRCodeAPIs} />
            <Route exact path="/qrcode/input" component={QRCodeInput} />
            <Route exact path="/table/export-csv" component={TableCsv} />
            <Route exact path="/table/export-xls" component={TableXLS} />
            <Route exact path="/ocr/ocr-upload" component={OcrUpload} />
            <Route exact path="/ocr/ocr-url" component={OcrTesseract} />
          </Switch>
        </Sidebar>
      </Fragment>
    </Router>
  );
}

export default App;

// --- OCR UPLOAD CLASS--
//https://reactjsexample.com/react-image-preview-upload/
